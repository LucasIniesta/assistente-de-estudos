import { Module } from '@nestjs/common';
import { AiProviderFactory } from './factories/ai-provider.factory';
import { OllamaService } from './providers/ollama.service';
import { OpenaiService } from './providers/openai.service';
import { AiChainService } from './services/ai-chain.service';
import { PromptService } from './services/prompt.service';

@Module({
  providers: [
    AiChainService,
    PromptService,
    OpenaiService,
    OllamaService,
    AiProviderFactory,
  ],
  exports: [AiChainService],
})
export class AiModule {}
