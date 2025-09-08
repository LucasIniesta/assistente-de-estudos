import { IAiRequest } from '../interfaces/ai-request.interface';

export abstract class AiProtocol {
  abstract call(aiRequest: IAiRequest): Promise<string>;
}
