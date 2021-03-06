import { Test, TestingModule } from '@nestjs/testing';
import { FileControllerController } from './file-controller.controller';

describe('FileControllerController', () => {
  let controller: FileControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileControllerController],
    }).compile();

    controller = module.get<FileControllerController>(FileControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
