/* import { Controller, UploadedFile, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiProperty } from '@nestjs/swagger';
import { modelOptions } from '@typegoose/typegoose';

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

@Controller('file')
export class FileController {
  @ApiProperty({ description: '上传图片' })
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  UploadedFile(@UploadedFile() file) {
    // 这里的 file 已经是保存后的文件信息了，在此处做数据库处理，或者直接返回保存后的文件信息
    return file;
  }
} */