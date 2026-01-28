import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    //pour utiliser le repository User dans AuthService
    TypeOrmModule.forFeature([User]),
    //configuration du module JWT
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'my_secret_key',
      signOptions: {
        expiresIn: '3600', 
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
