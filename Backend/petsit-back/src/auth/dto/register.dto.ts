import { IsEmail, IsEnum, MinLength } from 'class-validator';
import { UserRole } from 'src/Enums/roles.enum';

export class RegisterDto {
  firstname: string;
  lastname: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsEnum(UserRole)
  role: UserRole;

  description?: string;
  availability?: string;
}
