import { AiProviders } from '../enums/ai-providers.enum';
import { OllamaModels, OpenaiModels } from '../enums/aiModels.enum';

export interface IAiChaiRequest {
  model: OllamaModels | OpenaiModels;
  provider: AiProviders;
  userContent: string;
}
