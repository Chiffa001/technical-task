export type CommonState<E = unknown> = {
    fetching?: boolean;
    fetched?: boolean;
    failed?: boolean;
    error?: E;
};
