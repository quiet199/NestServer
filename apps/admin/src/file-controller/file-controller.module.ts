import { Module } from '@nestjs/common';
import { FileControllerController } from './file-controller.controller';

@Module({
  controllers: [FileControllerController]
})
export class FileControllerModule {}
