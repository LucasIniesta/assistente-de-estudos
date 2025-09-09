import { OllamaModels, OpenaiModels } from '../enums/aiModels.enum';
import { TMessages } from '../types/message.type';

export interface IAiRequest {
  model: OllamaModels | OpenaiModels;
  messages: TMessages[];
}
