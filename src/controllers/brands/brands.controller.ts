import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('brands')
export class BrandsController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  getCustomersById(@Param('id') id: string) {
    return this.appService.getById(id);
  }
  @Get()
  getAllsCustomers(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.appService.getAll(limit, offset, brand);
  }
}
