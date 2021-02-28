import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { SubtodosModule } from './subtodos/subtodos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';


@Module({
  imports: [TodosModule, SubtodosModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
