import { Body, Controller, Post } from '@nestjs/common';
import { CreateStudyAssistDto } from './dto/create-study-assist.dto';
import { StudyService } from './study.service';

@Controller('study')
export class StudyController {
  constructor(private readonly studyService: StudyService) {}

  @Post()
  createStudyAssist(@Body() createStudyDto: CreateStudyAssistDto) {
    return this.studyService.createStudyAssist(createStudyDto);
  }
}
