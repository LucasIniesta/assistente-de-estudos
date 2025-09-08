import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { IAiRequest } from '../interfaces/ai-request.interface';
import { AiProtocol } from '../protocols/ai.protocol';

@Injectable()
export class OpenaiService extends AiProtocol {
  async call({ messages, model }: IAiRequest): Promise<string> {
    try {
      const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const response = await client.chat.completions.create({
        model,
        messages,
      });

      if (response.choices[0].message.content) {
        return response.choices[0].message.content;
      }

      return 'Openai não enviou nenhuma resposta';
    } catch (error) {
      throw new Error(`Erro ao tentar utilizar Openai: ${error}`);
    }
  }
}
