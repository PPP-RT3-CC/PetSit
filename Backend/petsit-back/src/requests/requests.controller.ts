import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from 'src/Enums/roles.enum';

//@UseGuards(JwtAuthGuard, RolesGuard)
@UseGuards(JwtAuthGuard)
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  @Roles(UserRole.OWNER)
  create(@Body() dto: CreateRequestDto, @Request() req) {
    //const ownerId = 4;
    const ownerId = req.user.id; //jwt auth
    return this.requestsService.create(dto, ownerId);
  }

  // Owner dashboard
  @Get('owner')
  @Roles(UserRole.OWNER)
  getOwnerRequests(@Request() req) {
    //const ownerId = 4;
    const ownerId = req.user.id; // jwt auth
    return this.requestsService.findByOwner(ownerId);
  }

  // Sitter dashboard
  @Get('sitter')
  @Roles(UserRole.SITTER)
  getSitterRequests(@Request() req) {
    //const sitterId = 4;
    const sitterId = req.user.id; // jwt auth
    return this.requestsService.findBySitter(sitterId);
  }
  @Patch(':id/accept')
  @Roles(UserRole.SITTER)
  acceptRequest(@Param('id')id){
    return this.requestsService.acceptRequest(id);  }

  
  @Patch(':id/refuse')
  @Roles(UserRole.SITTER)
  refuseRequest(@Param('id')id){
    return this.requestsService.refuseRequest(id);  }


}
