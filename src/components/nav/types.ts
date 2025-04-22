import type { CreateQueryResult } from '@tanstack/svelte-query';

export type GithubQueryProps = {
    query: CreateQueryResult<any, Error>;
};
