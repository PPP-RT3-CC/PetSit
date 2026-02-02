import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { BlacklistedToken } from './entities/blacklisted-token.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(BlacklistedToken)
    private readonly blacklistRepo: Repository<BlacklistedToken>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'supersecret',
      passReqToCallback: true, 
    });
  }

  async validate(req: any, payload: any) {

    // extraire le token de la requete
    const token = req.headers.authorization?.replace('Bearer ', '');

    // vérifier si le token est blacklister
    const blacklisted = await this.blacklistRepo.findOne({
      where: { token },
    });

    if (blacklisted) {
      throw new UnauthorizedException('Token revoked');
    }

    const user = await this.userRepository.findOne({
      where: { id: payload.sub },
      select: ['id', 'email', 'role'], 
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;   
  }
}
