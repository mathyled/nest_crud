import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  getCategoriesById(@Param('id') id: string) {
    return this.appService.getById(id);
  }
  @Get()
  getAllsCategories() {
    return this.appService.getAll();
  }
}
