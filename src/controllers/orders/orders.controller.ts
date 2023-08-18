import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../../app.service';
@Controller('orders')
export class OrdersController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  getUsersById(@Param('id') id: string) {
    return this.appService.getById(id);
  }
  @Get()
  getAllUserss() {
    return this.appService.getAll();
  }
}
