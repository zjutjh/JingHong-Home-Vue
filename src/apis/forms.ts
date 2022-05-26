import request from "../utils/request";
import { IDevelopForm, INormalForm } from "../types/forms";
import { IRequest } from "../types/apis";
export const NormalForm = async (form: INormalForm) => {
  const res = await request<IRequest>({
    url: '/api/new_normal',
    method: 'POST',
    data: form
  })
  return res;
}

export const DevelopForm = async (form: IDevelopForm) => {
  const res = await request<IRequest>({
    url: '/api/new_develop',
    method: 'POST',
    data: form
  })
  return res;
}