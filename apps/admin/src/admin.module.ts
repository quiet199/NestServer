import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { FileControllerModule } from './file-controller/file-controller.module';
import { MulterModule } from '@nestjs/platform-express';
const MAO = require('multer-aliyun-oss');
@Module({
    imports: [
        MulterModule.register({
            storage: MAO({
                config: {
                    region: '',
                    accessKeyId: '',
                    accessKeySecret: '',
                    bucket: ''
                }
            })
            // dest:'uploads'
        }),
        DbModule,
        UsersModule,
        CoursesModule,
        EpisodesModule,
        FileControllerModule
    ],
    controllers: [AdminController],
    providers: [AdminService],
})
export class AdminModule { }
