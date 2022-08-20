import { IRequest, ResponseType } from "../types/apis";
import { IDevelopForm, IFormsData, INormalForm } from "../types/forms";
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

export const GetDataTotal = async (auth: string) => {
  const res = await request<ResponseType<IFormsData>>({
    url: '/api/get_forms/total',
    method: 'GET',
    headers: {
      'Authorization': auth,
    }
  })
  return res;
}

export const TestAdmin = async (auth: string) => {
  return await request<IRequest>({
    url: '/api/test_admin',
    method: 'GET',
    headers: {
      'Authorization': auth
    },
  })
}