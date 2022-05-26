import axios, { AxiosRequestConfig } from 'axios';
import { ResponseType } from '../types/apis'
import { BASE_URL, ENV } from './const';
const instance = axios.create({
  // baseURL: (ENV == 'dev' ? 'http://127.0.0.1:8888/' : 'http://101.34.27.200:8888')
  // baseURL: 'http://101.34.27.200:8888/'
  baseURL: BASE_URL
})

const request = async <T = any>(config: AxiosRequestConfig): Promise<ResponseType<T>> => {
  try {
    const { data } = await instance.request<ResponseType<T>>(config)
    console.log(data)
    return data
  } catch (err: any) {
    const message = err.message || '请求失败'
    console.error(message)
    alert(message)
    return {
      message: message,
      data: null as any
    }
  }
}

export default request