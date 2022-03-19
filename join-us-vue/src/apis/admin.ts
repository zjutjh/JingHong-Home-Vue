import { IRequest, ResponseType } from "../types/apis";
import { IDevelopForm, INormalForm } from "../types/forms";
import request from "../utils/request";

export const GetDataNormal = async (auth: string) => {
  const res = await request<ResponseType<INormalForm>>({
    url: '/api/get_forms/normal',
    method: 'GET',
    headers: {
      'Authorization': auth,
    }
  })
  return res;
}