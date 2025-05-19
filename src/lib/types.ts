export type Streamed<T> = T | Promise<T>;

export type Contributor = {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    type: 'Bot' | 'User';
};
