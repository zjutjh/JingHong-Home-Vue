export interface INormalForm {
  name: string;
  stu_id: string;
  gender: number;
  college: string;
  campus: string;
  phone: string;
  qq: string;
  region: string;
  want1: string;
  want2: string;
  profile: string;
  feedback: string;
}

export interface IDevelopForm {
  name: string;
  stu_id: string;
  gender: number;
  college: string;
  campus: string;
  phone: string;
  qq: string;
  region: string;
  profile: string;
  feedback: string;
  ability_other: string;
  ability: {
    api: boolean;
    front_end: boolean;
    document: boolean;
    git: boolean;
  }
}