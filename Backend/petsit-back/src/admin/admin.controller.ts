import { Controller, Get, Delete, Param } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('owners')
  getOwners() {
    return this.adminService.getOwners();
  }

  @Get('sitters')
  getSitters() {
    return this.adminService.getSitters();
  }

  @Get('requests')
  getRequests() {
    return this.adminService.getRequests();
  }

  @Delete('sitters/:id')
  deleteSitter(@Param('id') id: string) {
    return this.adminService.deleteSitter(+id);
  }

  @Delete('owners/:id')
  deleteOwner(@Param('id') id: string) {
    return this.adminService.deleteOwner(+id);
  }

  @Delete('requests/:id')
  deleteRequest(@Param('id') id: string) {
    return this.adminService.deleteRequest(+id);
  }
}
