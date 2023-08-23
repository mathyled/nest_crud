import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  getCategoriesById(@Param('id') id: string) {
    return this.appService.getById(id);
  }
  @Get()
  getAllsCategories(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.appService.getAll(limit, offset, brand);
  }
}
