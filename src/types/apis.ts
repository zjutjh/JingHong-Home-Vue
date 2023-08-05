export interface ResponseType<T = any> {
  msg: string;
  message: string;
  data: T;
}

export interface IRequest {
  message: string;
}

export interface QRequest<T = any>{
  msg: string;
  data: T;
}
