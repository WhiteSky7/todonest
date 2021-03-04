import { Injectable } from '@nestjs/common';
import { CreateSubtodoDto } from './dto/create-subtodo.dto';
import { UpdateSubtodoDto } from './dto/update-subtodo.dto';
import { Repository } from 'typeorm';
import { Subtodo } from './entities/subtodo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubtodosService {
  constructor(
    @InjectRepository(Subtodo)
    private subtodosRepository: Repository<Subtodo>,
  ) {}
  create(createSubtodoDto: CreateSubtodoDto): Promise<Subtodo> {
    const subtodo = new Subtodo();
    subtodo.body = createSubtodoDto.body;
    subtodo.todos = createSubtodoDto.todoid;

    return this.subtodosRepository.save(subtodo);
  }

  async findAll(): Promise<Subtodo[]> {
    return this.subtodosRepository.find();
  }

  findOne(id: string): Promise<Subtodo> {
    return this.subtodosRepository.findOne(id);
  }

  update(id: string, updateSubtodoDto: UpdateSubtodoDto) {
    return this.subtodosRepository.update(id, {
      body: updateSubtodoDto.body,
      todos: updateSubtodoDto.todoid,
    });
  }

  remove(id: string) {
    return this.subtodosRepository.delete(id);
  }
}
