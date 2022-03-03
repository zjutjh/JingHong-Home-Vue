export interface ResponseType<T = any> {
    message: string;
    data: T;
}