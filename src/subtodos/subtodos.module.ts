import { Module } from '@nestjs/common';
import { SubtodosService } from './subtodos.service';
import { SubtodosController } from './subtodos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subtodo } from './entities/subtodo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subtodo])],
  controllers: [SubtodosController],
  providers: [SubtodosService],
})
export class SubtodosModule {}
