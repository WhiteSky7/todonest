import { Injectable } from '@nestjs/common';
import { CreateSubtodoDto } from './dto/create-subtodo.dto';
import { UpdateSubtodoDto } from './dto/update-subtodo.dto';

@Injectable()
export class SubtodosService {
  create(createSubtodoDto: CreateSubtodoDto) {
    return 'This action adds a new subtodo';
  }

  findAll() {
    return `This action returns all subtodos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subtodo`;
  }

  update(id: number, updateSubtodoDto: UpdateSubtodoDto) {
    return `This action updates a #${id} subtodo`;
  }

  remove(id: number) {
    return `This action removes a #${id} subtodo`;
  }
}
