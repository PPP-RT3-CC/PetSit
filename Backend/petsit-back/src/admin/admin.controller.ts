import { Controller, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UserRole } from 'src/Enums/roles.enum';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
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
