import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Request } from 'src/requests/entities/request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Request])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
