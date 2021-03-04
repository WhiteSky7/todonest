import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Todo } from '../../todos/entities/todo.entity';
@Entity()
export class Subtodo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  body: string;

  // eslint-disable-next-line prettier/prettier
  @ManyToOne(() => Todo, todo => todo.subtodo, {
    onDelete: 'CASCADE',
  })
  todos: Todo;
}
