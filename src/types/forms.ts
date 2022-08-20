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

// interface department {
//   total: number;
//   today: number;
//   want1: number;
//   want2: number;
//   want1_zh: number;
//   want2_zh: number;
//   want1_pf: number;
//   want2_pf: number;
//   want1_mgs: number;
//   want2_mgs: number;
// }
// export interface IFormsData {
//   total: number;
//   total_today: number;
//   total_zh: number;
//   total_pf: number;
//   total_mgs: number;
//   bgs: department;
//   hdb: department;
//   msc: department;
//   touch: department;
//   xh: department;
//   bj: department;
//   sj: department;
//   kfb: department;
//   yb: department;
// }
export type IFormsData = number[][];
export interface ICaptcha {
  id: string;
  b64s: string;
}