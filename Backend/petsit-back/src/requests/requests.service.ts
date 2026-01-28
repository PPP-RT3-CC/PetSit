import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from './entities/request.entity';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Request)
    private requestRepo: Repository<Request>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(createDto: CreateRequestDto, ownerId: number) {
    const owner = await this.userRepo.findOneBy({ id: ownerId });
    const sitter = await this.userRepo.findOneBy({ id: createDto.sitterId });

    const request = this.requestRepo.create({
      animalType: createDto.animalType,
      petName: createDto.petName,
      startDate: createDto.startDate,
      endDate: createDto.endDate,
      description: createDto.description,
      owner,
      sitter,
    } as Request);
    
    return this.requestRepo.save(request);
  }

  findByOwner(ownerId: number) {
    return this.requestRepo.find({ where: { owner: { id: ownerId }  } });
  }

  findBySitter(sitterId: number) {
    return this.requestRepo.find({ where: { sitter: { id: sitterId } } });
  }

  /*//cli generated crud entry points, could be helpful
  create(createRequestDto: CreateRequestDto) {
    return 'This action adds a new request';
  }

  findAll() {
    return `This action returns all requests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }*/
}
