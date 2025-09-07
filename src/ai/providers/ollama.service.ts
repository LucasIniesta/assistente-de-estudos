import { Injectable } from '@nestjs/common';
import ollama from 'ollama';
import { IAiRequest } from '../interfaces/ai-request.interface';
import { AiProtocol } from './ai.protocol';

@Injectable()
export class OllamaService extends AiProtocol {
  async call({ messages, model }: IAiRequest): Promise<string> {
    try {
      const response = await ollama.chat({
        model,
        messages,
        format: 'json',
      });

      return response.message.content;
    } catch (error) {
      throw new Error(`Erro ao tentar utilizar Ollama: ${error}`);
    }
  }
}
