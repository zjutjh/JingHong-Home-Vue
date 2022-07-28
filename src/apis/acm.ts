import { IACMUser } from "../types/acm";
import { request_acm } from "../utils/request";

export const registerUser = async (data: IACMUser) => {
  const res = await request_acm({
    url: '/I_LOVE_ZJUT_I_LOVE_JH/',
    method: 'GET',
    params: {
      data: {
        type: 'upload',
        data: [data.name, data.phone, data.stu_id, data.email],
        code: data.code,
      },
    }
  })
  return res;
}

export const getCaptcha = async (data: IACMUser) => {

  const res = await request_acm({
    url: '/I_LOVE_ZJUT_I_LOVE_JH/',
    method: 'GET',
    params: {
      data: {
        type: 'ask',
        data: [data.name, data.phone, data.stu_id, data.email]
      }
    }
  })
  console.log(res)
  return res;
}