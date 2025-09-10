import { Module } from '@nestjs/common';
import { AiModule } from 'src/ai/ai.module';
import { StudyController } from './study.controller';
import { StudyService } from './study.service';

@Module({
  imports: [AiModule],
  controllers: [StudyController],
  providers: [StudyService],
})
export class StudyModule {}
