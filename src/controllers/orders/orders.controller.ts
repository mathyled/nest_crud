import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from '../../app.service';
@Controller('orders')
export class OrdersController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getAllUserss(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.appService.getAll(limit, offset, brand);
  }
  @Get(':id')
  getUsersById(@Param('id') id: string) {
    return this.appService.getById(id);
  }
}
