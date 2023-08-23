import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from '../../app.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getUsersById(@Param('id') id: string) {
    return this.appService.getById(id);
  }
  @Get()
  getAllUserss(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.appService.getAll(limit, offset, brand);
  }
}
