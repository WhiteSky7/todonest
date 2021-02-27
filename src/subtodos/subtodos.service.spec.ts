import { Test, TestingModule } from '@nestjs/testing';
import { SubtodosService } from './subtodos.service';

describe('SubtodosService', () => {
  let service: SubtodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubtodosService],
    }).compile();

    service = module.get<SubtodosService>(SubtodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
