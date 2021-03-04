import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Subtodo } from '../../subtodos/entities/subtodo.entity';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '', nullable: true })
  title: string;

  @Column({ default: '', nullable: true })
  body: string;

  @Column({ default: true })
  isActive: boolean;

  // eslint-disable-next-line prettier/prettier
  @OneToMany(() => Subtodo, subtodo => subtodo.todos ,{
    cascade: true,
  })
  subtodo: Subtodo[];
}
