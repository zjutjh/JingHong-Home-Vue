import request from "../utils/request";
import { ICaptcha, IDevelopForm, INormalForm } from "../types/forms";
import { IRequest, ResponseType } from "../types/apis";


export const GetCaptchaForm = async () => {
  const res = await request<ICaptcha>({
    url: '/api/get_captcha',
    method: 'GET'
  })
  return res;
}