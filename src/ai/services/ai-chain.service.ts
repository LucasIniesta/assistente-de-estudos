import { Inject, Injectable } from '@nestjs/common';
import { AiProviderFactory } from '../factories/ai-provider.factory';
import { IAiChainRequest } from '../interfaces/ai-chain-request.interface';
import { AiChainProtocol } from '../protocols/ai-chain.protocol';
import { PromptService } from './prompt.service';

@Injectable()
export class AiChainService extends AiChainProtocol {
  constructor(
    @Inject()
    private readonly aiProviderFactory: AiProviderFactory,
    private readonly promptService: PromptService,
  ) {
    super();
  }
  async studyAssistant({
    model,
    provider,
    userContent,
  }: IAiChainRequest): Promise<string> {
    const aiProvider = this.aiProviderFactory.getProvider(provider);

    let response = `Conteúdo: ${userContent}`;

    const summaryMessages = this.promptService.summarize(userContent);

    const summary = await aiProvider.call({ messages: summaryMessages, model });

    response += `Resumo: ${summary}`;

    const questionsMessages = this.promptService.questionsCreator(response);
    const questions = await aiProvider.call({
      messages: questionsMessages,
      model,
    });

    response += `Perguntas: ${questions}`;

    const tutorMessages = this.promptService.tutor(response);
    const studyGuide = await aiProvider.call({
      messages: tutorMessages,
      model,
    });

    return studyGuide;
  }
}
