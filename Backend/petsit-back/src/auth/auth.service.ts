import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import {
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { UserRole } from 'src/Enums/roles.enum';
import { BlacklistedToken } from './entities/blacklisted-token.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
    @InjectRepository(BlacklistedToken)
    private blacklistRepo: Repository<BlacklistedToken>,
  ) {}

  async register(dto: RegisterDto) {

    // eviter que quelqu'un s'enregistre en tant qu'admin de postman
    if (dto.role === UserRole.ADMIN) {
      throw new UnauthorizedException('Cannot register as admin');
   }
   try{
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = this.userRepository.create({
      ...dto,
      password: hashedPassword,
      role: dto.role,
    });

    await this.userRepository.save(user);

    return { message: 'User registered' };
   } catch (error) {
        
        // if email already exists
      if (error.code === '23505') {
          throw new ConflictException('Email already in use');
      }
      throw error;
   }
  }

  async login(dto: LoginDto) {

    const user = await this.userRepository.findOne({
      where: { email: dto.email },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const passwordValid = await bcrypt.compare(dto.password, user.password);

    if (!passwordValid) throw new UnauthorizedException('Invalid credentials');

    const payload = {
      sub: user.id,
      role: user.role,
    };

    const token = await this.jwtService.signAsync(payload);

    return { token };
  }

  async blacklistToken(token: string) {
    await this.blacklistRepo.save({ token });
    return { message: 'Logged out' };
  }
}
