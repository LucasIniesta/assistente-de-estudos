import { Injectable } from '@nestjs/common';
import { TMessages } from '../types/message.type';
import { TUserContentTutor } from '../types/user-content-prompt.type';

@Injectable()
export abstract class PromptProtocol {
  abstract summarize(userContent: string): TMessages[];
  abstract questionsCreator(summarizeContent: string): TMessages[];
  abstract tutor(finalContent: TUserContentTutor): TMessages[];
}
