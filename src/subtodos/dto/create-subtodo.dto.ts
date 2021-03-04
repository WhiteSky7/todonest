import { Todo } from './../../todos/entities/todo.entity';
export class CreateSubtodoDto {
  body: string;
  todoid: Todo;
}
