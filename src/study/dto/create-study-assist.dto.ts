/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStudyAssistDto {
  @IsString({ message: 'User content must to be a string' })
  @IsNotEmpty({ message: 'User content can be empty' })
  userContent: string;
}
