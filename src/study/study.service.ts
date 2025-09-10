import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { AiProviders } from 'src/ai/enums/ai-providers.enum';
import { OllamaModels } from 'src/ai/enums/aiModels.enum';
import { AiChainService } from 'src/ai/services/ai-chain.service';
import { CreateStudyAssistDto } from '../study/dto/create-study-assist.dto';

@Injectable()
export class StudyService {
  constructor(
    @Inject()
    private readonly aiChainService: AiChainService,
  ) {}
  async createStudyAssist({ userContent }: CreateStudyAssistDto) {
    try {
      const response = await this.aiChainService.studyAssistant({
        model: OllamaModels.QWEN3,
        userContent,
        provider: AiProviders.OLLAMA,
      });

      return response;
    } catch (error) {
      throw new HttpException(`Erro: ${error}`, HttpStatus.BAD_REQUEST);
    }
  }
}
