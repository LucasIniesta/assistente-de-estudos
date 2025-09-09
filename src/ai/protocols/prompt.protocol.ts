import { Injectable } from '@nestjs/common';
import { TMessages } from '../types/message.type';

@Injectable()
export abstract class PromptProtocol {
  abstract summarize(userContent: string): TMessages[];
  abstract questionsCreator(summarizeContent: string): TMessages[];
  abstract tutor(finalContent: string): TMessages[];
}
