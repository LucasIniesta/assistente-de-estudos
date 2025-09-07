import { TMessages } from '../types/message.type';

export interface IAiRequest {
  model: string;
  messages: TMessages[];
  format?: string;
  stream?: boolean;
}
