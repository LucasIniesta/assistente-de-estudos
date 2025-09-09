import { Injectable } from '@nestjs/common';
import { SYSTEM_PROMPTS } from '../constants/system-prompts.constants';
import { Roles } from '../enums/roles.enum';
import { PromptProtocol } from '../protocols/prompt.protocol';
import { TMessages } from '../types/message.type';

@Injectable()
export class PromptService extends PromptProtocol {
  summarize(userContent: string): TMessages[] {
    return [
      { role: Roles.SYSTEM, content: SYSTEM_PROMPTS.SUMMARIZER },
      { role: Roles.USER, content: userContent },
    ];
  }

  questionsCreator(summarizeContent: string): TMessages[] {
    return [
      { role: Roles.SYSTEM, content: SYSTEM_PROMPTS.QUESTIONS_CREATOR },
      { role: Roles.USER, content: summarizeContent },
    ];
  }

  tutor(finalContent: string): TMessages[] {
    return [
      { role: Roles.SYSTEM, content: SYSTEM_PROMPTS.TUTOR },
      { role: Roles.USER, content: finalContent },
    ];
  }
}
