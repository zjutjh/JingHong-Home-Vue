import { INormalFormBrief } from './../types/forms';
import request from "../utils/request";
import { IDevelopForm, INormalForm } from "../types/forms";
import { IRequest, ResponseType } from "../types/apis";
import axios from 'axios';
import { BASE_URL } from '@/utils/const';
export const PostNormalForm = async (form: INormalForm) => {
  const res = await request<IRequest>({
    url: '/api/new_normal',
    method: 'POST',
    data: form,
  })
  return res;
}

export const PostDevelopForm = async (form: IDevelopForm) => {
  const res = await request<IRequest>({
    url: '/api/new_develop',
    method: 'POST',
    data: form
  })
  return res;
}

export const GetAllNormalFormsBrief = async (auth: string) => {
  const res = await request<{ data: INormalFormBrief[] }>({
    url: '/api/all_normal_forms_brief',
    method: 'GET',
    headers: {
      'Authorization': auth
    }
  })
  return res;
}

export const GetNormalForm = async (auth: string, stu_id: string) => {
  const res = await request<{ data: INormalForm }>({
    url: '/api/normal_form',
    method: 'GET',
    params: {
      'stu_id': stu_id,
    },
    headers: {
      'Authorization': auth,
    }
  })
  return res
}

export const GetExportAllForms = async (auth: string) => {
  await axios({
    method: 'GET',
    baseURL: BASE_URL,
    url: '/api/export_normal_form',
    responseType: 'blob',
    headers: { 'Authorization': auth },
  }).then(
    (res) => {
      let url = window.URL.createObjectURL(new Blob([res.data]))
      let a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.setAttribute('download', 'excel.xlsx')
      document.body.appendChild(a)
      a.click()
    }
  )
}