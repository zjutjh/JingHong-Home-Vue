export interface ResponseType<T = any> {
  message: string;
  data: T;
}

export interface IRequest {
  message: string;
}