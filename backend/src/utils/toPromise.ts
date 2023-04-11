export const toPromise = <T>(promise: Promise<T>): Promise<[T | null, Error | null]> =>
    promise
        .then<[T, null]>((result: T) => [result, null])
        .catch<[null, Error]>((error: Error) => [null, error]);