import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  create(@Body() dto: CreateRequestDto, @Request() req) {
    const ownerId = 4;
    //const ownerId = req.user.id; //jwt auth
    return this.requestsService.create(dto, ownerId);
  }

  // Owner dashboard
  @Get('owner')
  getOwnerRequests(@Request() req) {
    const ownerId = 4;
    //const ownerId = req.user.id; // jwt auth
    return this.requestsService.findByOwner(ownerId);
  }

  // Sitter dashboard
  @Get('sitter')
  getSitterRequests(@Request() req) {
    const sitterId = 4;
    //const sitterId = req.user.id; // jwt auth
    return this.requestsService.findBySitter(sitterId);
  }
  @Patch(':id/accept')
  acceptRequest(@Param('id')id){
    return this.requestsService.acceptRequest(id);  }
  @Patch(':id/refuse')
  refuseRequest(@Param('id')id){
    return this.requestsService.refuseRequest(id);  }


  /*//cli generated crud entry points, could be helpful
  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestsService.create(createRequestDto);
  }

  @Get()
  findAll() {
    return this.requestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestsService.update(+id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestsService.remove(+id);
  }*/
}
