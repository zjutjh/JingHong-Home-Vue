import axios, { AxiosRequestConfig } from 'axios';
import { ResponseType } from '../types/apis'
import { ACM_BASE_URL, BASE_URL, ENV } from './const';
const instance = axios.create({
  baseURL: BASE_URL
})

const request = async <T = any>(config: AxiosRequestConfig): Promise<ResponseType<T>> => {
  try {
    const { data } = await instance.request<ResponseType<T>>(config)
    return data
  } catch (err: any) {
    const message = err.message || '请求失败'

    return {
      message: message,
      data: null as any
    }
  }
}

const instance_acm = axios.create({
  baseURL: ACM_BASE_URL
});

export const request_acm = async (config: AxiosRequestConfig): Promise<string | undefined> => {
  try {
    const data = await instance_acm.request<string>(config)
    console.log(data)
    return data.data
  } catch (err: any) {
    const message = err.message || '请求失败'
    console.error(message)
    return message
  }

}
export default request