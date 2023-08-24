import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from '../../app.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.appService.getById(id);
  }
  @Get()
  getAllProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.appService.getAll(limit, offset, brand);
  }
  @Post()
  createProduct(@Body() payload: any) {
    return {
      message: 'algun mensaje',
      payload,
    };
  }

  @Put(':id')
  updateProduct(@Param() id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  deleteProduct(@Param() id: number) {
    return id;
  }
}
