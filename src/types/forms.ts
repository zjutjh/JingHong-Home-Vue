export interface INormalForm {
  name: string;
  stu_id: string;
  gender: string;
  college: string;
  campus: string;
  phone: string;
  qq: string;
  region: number;
  want1: number;
  want2: number;
  profile: string;
  feedback: string;
  captcha_id: string;
  captcha_code: string;
}

export interface IDevelopForm {
  name: string;
  stu_id: string;
  gender: string;
  college: string;
  campus: string;
  phone: string;
  qq: string;
  region: string;
  feedback: string;
  ability_other: string;
  ability: {
    api: boolean;
    front_end: boolean;
    document: boolean;
    git: boolean;
  }
  captcha_id: string;
  captcha_code: string;
}

export type IFormsData = number[][];
export interface ICaptcha {
  id: string;
  b64s: string;
}

export interface INormalFormBrief {
  name: string;
  stu_id: string;
  want1: number;
  want2: number;
  region: number;
}