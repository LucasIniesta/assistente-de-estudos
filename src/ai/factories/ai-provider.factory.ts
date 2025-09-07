import { Inject, Injectable } from '@nestjs/common';
import { AiProviders } from '../enums/ai-providers.enum';
import { AiProtocol } from '../providers/ai.protocol';
import { OllamaService } from '../providers/ollama.service';
import { OpenaiService } from '../providers/openai.service';

@Injectable()
export class AiProviderFactory {
  constructor(
    @Inject()
    private readonly openAiProvider: OpenaiService,
    private readonly ollamaProvider: OllamaService,
  ) {}

  getProvider(providerName: AiProviders): AiProtocol {
    switch (providerName) {
      case AiProviders.OPENAI:
        return this.openAiProvider;
      case AiProviders.OLLAMA:
        return this.ollamaProvider;
      default:
        throw new Error('Provider não suportado');
    }
  }
}
