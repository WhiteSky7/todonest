import { Test, TestingModule } from '@nestjs/testing';
import { SubtodosController } from './subtodos.controller';
import { SubtodosService } from './subtodos.service';

describe('SubtodosController', () => {
  let controller: SubtodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubtodosController],
      providers: [SubtodosService],
    }).compile();

    controller = module.get<SubtodosController>(SubtodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
