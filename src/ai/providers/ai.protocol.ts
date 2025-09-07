import { IAiRequest } from '../interfaces/ai-request.interface';
import { IAiResponse } from '../interfaces/ai-response.interface';

export abstract class AiProtocol {
  abstract call(aiRequest: IAiRequest): IAiResponse;
}
