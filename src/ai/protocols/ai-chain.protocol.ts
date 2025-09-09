import { IAiChaiRequest } from '../interfaces/ai-chain-request.interface';

export abstract class AiChainProtocol {
  abstract studyAssistant(aiChainRequest: IAiChaiRequest): Promise<string>;
}
