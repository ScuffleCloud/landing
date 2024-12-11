/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { validate } from 'email-validator';

interface Env {
  MAILGUN_API_KEY: string;
  MAILGUN_MAILINGLIST: string;
  TURNSTILE_KEY: string;
  ALLOWED_ORIGIN_URLS: string;
}

interface TurnstileOutcome {
  success: boolean;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { MAILGUN_API_KEY, MAILGUN_MAILINGLIST, TURNSTILE_KEY, ALLOWED_ORIGIN_URLS } = env;
    const ALLOWED_ORIGINS = ALLOWED_ORIGIN_URLS.split(',');
    const origin = request.headers.get('Origin') as string;
    if (!ALLOWED_ORIGINS.includes(origin)) {
      return new Response('Origin not allowed', { status: 403 });
    }

    const headers = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response('OK', { status: 200, headers });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers });
    }

    let body: FormData;
    try {
      body = await request.formData();
    } catch (e) {
      console.error('failed to parse request body', e);
      return new Response('Invalid request', { status: 400, headers });
    }
    const email = body.get('email');
    const token = body.get('cf-turnstile-response');

    if (typeof email !== 'string' || typeof token !== 'string') {
      console.error('missing email or token', typeof email, typeof token);
      return new Response('Invalid request', { status: 400, headers });
    }

    if (!validate(email)) {
      return new Response('Invalid email address', { status: 400, headers });
    }

    const ip = request.headers.get('CF-Connecting-IP') as string;

    // Validate captcha using turnstile.
    try {
      const formData = new FormData();

      formData.append('secret', TURNSTILE_KEY);
      formData.append('response', token);
      formData.append('remoteip', ip);

      const turnstileResult = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          body: formData,
          method: 'POST',
        },
      );

      const turnstileOutcome: TurnstileOutcome = await turnstileResult.json();

      if (!turnstileOutcome.success) {
        console.error('failed to validate captcha', turnstileOutcome);
        return new Response('The provided Turnstile token was not valid!', {
          status: 401,
          headers,
        });
      }
    } catch (e) {
      console.error('failed to validate captcha', e);
      return new Response('Internal Server Error', { status: 500, headers });
    }

    try {
      const formData = new FormData();
      formData.append('address', email);

      const result = await fetch(
        `https://api.mailgun.net/v3/lists/${MAILGUN_MAILINGLIST}/members`,
        {
          body: formData,
          method: 'POST',
          headers: {
            Authorization: `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
          },
        },
      );

      // Assert response can be parsed as json
      await result.json();
    } catch (e) {
      console.error('failed to create user on mailgun list', e);
      return new Response('Internal Server Error', { status: 500, headers });
    }

    return new Response('Email added to mailing list', { status: 200, headers });
  },
} satisfies ExportedHandler<Env>;
