import { Roles } from '../enums/roles.enum';
import { TUserContentTutor } from './user-content-tutor.type';

export type TMessages = {
  role: Roles;
  content: string | TUserContentTutor;
};
