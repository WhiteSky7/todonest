import { Module } from '@nestjs/common';
import { SubtodosService } from './subtodos.service';
import { SubtodosController } from './subtodos.controller';

@Module({
  controllers: [SubtodosController],
  providers: [SubtodosService]
})
export class SubtodosModule {}
