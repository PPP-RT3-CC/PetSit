import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Request } from 'src/requests/entities/request.entity';
import { UserRole } from 'src/Enums/roles.enum';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
    @InjectRepository(Request) private requestsRepo: Repository<Request>,
  ) {}

  getOwners() {
    return this.usersRepo.find({
      where: { role: UserRole.OWNER },
      select: ['id', 'firstname', 'lastname', 'email', 'role'],
    });
  }

  getSitters() {
    return this.usersRepo.find({
      where: { role: UserRole.SITTER },
      select: ['id', 'firstname', 'lastname', 'email', 'role', 'description'],
    });
  }

  getRequests() {
    return this.requestsRepo.find({
      relations: ['owner', 'sitter'],
      select: {
        id: true,
        animalType: true,
        petName: true,
        startDate: true,
        endDate: true,
        description: true,
        status: true,
        owner: {
          id: true,
          firstname: true,
          lastname: true,
          email: true,
        },
        sitter: {
          id: true,
          firstname: true,
          lastname: true,
          email: true,
        },
      },
    });
  }

  async deleteSitter(id: number) {
    const result = await this.usersRepo.delete({ id, role: UserRole.SITTER });
    const deleted = (result.affected ?? 0) > 0;
    return {
      deleted,
      message: deleted ? 'Sitter deleted successfully' : 'Sitter not found',
    };
  }

  async deleteOwner(id: number) {
    const result = await this.usersRepo.delete({ id, role: UserRole.OWNER });
    const deleted = (result.affected ?? 0) > 0;
    return {
      deleted,
      message: deleted ? 'Owner deleted successfully' : 'Owner not found',
    };
  }

  async deleteRequest(id: number) {
    const result = await this.requestsRepo.delete(id);
    const deleted = (result.affected ?? 0) > 0;
    return {
      deleted,
      message: deleted ? 'Request deleted successfully' : 'Request not found',
    };
  }
}
