export interface IApiSuccessResponse<T> {
    data: T;
}

export interface IApiErrorResponse {
    statusCode: number;
    message: string;
    error: string;
}
