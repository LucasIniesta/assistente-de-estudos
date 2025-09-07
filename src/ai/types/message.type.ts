import { Roles } from '../enums/roles.enum';

export type TMessages = {
  system: {
    role: Roles;
    content: string;
  };
};
