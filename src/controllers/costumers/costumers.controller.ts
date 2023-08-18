import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('costumers')
export class CostumersController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  getCustomersById(@Param('id') id: string) {
    return this.appService.getById(id);
  }
  @Get()
  getAllsCustomers() {
    return this.appService.getAll();
  }
}
