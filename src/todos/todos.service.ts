import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}
  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createTodoDto.title;
    todo.body = createTodoDto.body;

    return this.todosRepository.save(todo);
  }

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find({
      relations: ['subtodo'],
    });
  }

  findOne(id: string): Promise<Todo> {
    return this.todosRepository.findOne(id, { relations: ['subtodo'] });
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todosRepository.update(id, {
      title: updateTodoDto.title,
      body: updateTodoDto.body,
      isActive: updateTodoDto.isActive,
    });
  }

  remove(id: string) {
    return this.todosRepository.delete(id);
  }
}
