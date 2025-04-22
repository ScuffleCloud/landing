export const ssr = false;

import { PUBLIC_GITHUB_REPO_ID } from '$env/static/public';
import type { PageLoad } from './$types';

export const load = (async ({ depends, fetch }) => {
    depends('github:contributors');

    const fetchContributors = async () => {
        const response = await fetch(
            `https://api.github.com/repositories/${PUBLIC_GITHUB_REPO_ID}/contributors`,
        );
        if (!response.ok) throw new Error(`Failed to fetch contributors: ${response.statusText}`);
        return response.json();
    };

    return {
        contributors: fetchContributors(),
    };
}) satisfies PageLoad;
