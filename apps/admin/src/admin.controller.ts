import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AdminService } from './admin.service';
import { FileInterceptor } from '@nestjs/platform-express'
import { Express } from 'express'

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getHello(): string {
    return this.adminService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile('file') file: Express.Multer.File){
    return file
    /* return {
        url:`http://localhost:3000/uploads/${file.filename}`
    } */
  }

  /* @Post('uploadvideo')
  @UseInterceptors(FileInterceptor('file'))
  async uploadvideo(@UploadedFile('file') file: Express.Multer.File){
      console.log(file)
    return {
        url:`http://localhost:3000/uploads/${file.filename}`
    }
  } */
}
