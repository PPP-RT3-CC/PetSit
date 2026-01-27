import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../../Enums/roles.enum';

@Entity('users')
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string; //later hash for auth

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  role: UserRole;

  @Column({ nullable: true })
  description?: string; // only for sitters

  @Column({ nullable: true })
  availability?: string; //only for sitters


}
