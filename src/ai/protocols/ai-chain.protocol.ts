import { IAiChainRequest } from '../interfaces/ai-chain-request.interface';

export abstract class AiChainProtocol {
  abstract studyAssistant(aiChainRequest: IAiChainRequest): Promise<string>;
}
