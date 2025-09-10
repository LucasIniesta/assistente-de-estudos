import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AiModule } from 'src/ai/ai.module';
import { StudyModule } from 'src/study/study.module';

@Module({
  imports: [ConfigModule.forRoot(), AiModule, StudyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
