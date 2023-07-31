import {request_q} from '@/utils/request'

export const getQuestionnaire = async () => {
  const res = await request_q({
    url: '/questionnaires/getAll',
    method: 'GET',
  })
  return res;
}

export const getQuestionnaireById = async (id: string) => {
  const res = await request_q({
    url: '/questionnaires/getQ',
    method: 'GET',
    params: {
      id
    }
  })
  return res;
}

export const createQuestionnaire = async (data: any) => {
  const res = await request_q({
    url: '/questionnaires/create',
    method: 'POST',
    data
  })
  return res;
}

export const getQuestionnaireData = async (id: string) => {
  const res = await request_q({
    url: '/questionnaires/getData',
    method: 'GET',
    params: {
      id
    }
  })
  return res;
}