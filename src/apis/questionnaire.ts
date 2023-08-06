import {request_q} from '@/utils/request'
import {QRequest} from "@/types/apis";

export const getQuestionnaire = async () => {
  const res = await request_q({
    url: '/api/admin/list/get',
    method: 'GET',
  })
  return res;
}

export const getQuestionnaireById = async (id: string) => {
  const res = await request_q({
    url: '/api/admin/single/get',
    method: 'GET',
    params: {
      id
    }
  })
  return res;
}

export const  updateQuestionnaire = (data: Object) => {
  return request_q({
    url: '/api/admin/draft/update',
    method: 'POST',
    data
  })
}

export const createQuestionnaire = async (data: any) => {
  const res = await request_q({
    url: '/api/admin/add',
    method: 'POST',
    data
  })
  return res;
}

export const deleteQuestionnaire = async (id: String) => {
    return await request_q<QRequest>({
      url: '/api/admin/delete',
      method: 'post',
      data: {
          id: id,
      }
  });
}

export const changeQuestionnaireStatus = async (data: any) => {
    return await request_q({
        url: '/api/admin/draft/status',
        method: 'post',
        data
    });
}

export const getQuestionnaireDataById = async (id: string) => {
    const res = await request_q({
        url: '/api/admin/detail/get',
        method: 'GET',
        params: {
        id
        }
    })
    return res;
}

export const UserGetQuestionnaireAll = async () => {
    return await request_q({
        url: '/api/user/all/get',
        method: 'GET',
    });
}

export const UserGetQuestionnaireData = async (id: number) => {
    return await request_q({
        url: '/api/user/get',
        method: 'GET',
        params: {
            id
        }
    });
}

export const UserSubmitQuestionnaireData = async (data: any) => {
    return await request_q({
        url: '/api/user/add',
        method: 'POST',
        data
    });
}
