import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SubtodosService } from './subtodos.service';
import { CreateSubtodoDto } from './dto/create-subtodo.dto';
import { UpdateSubtodoDto } from './dto/update-subtodo.dto';

@Controller('subtodos')
export class SubtodosController {
  constructor(private readonly subtodosService: SubtodosService) {}

  @Post()
  create(@Body() createSubtodoDto: CreateSubtodoDto) {
    return this.subtodosService.create(createSubtodoDto);
  }

  @Get()
  findAll() {
    return this.subtodosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subtodosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSubtodoDto: UpdateSubtodoDto) {
    return this.subtodosService.update(id, updateSubtodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subtodosService.remove(id);
  }
}
