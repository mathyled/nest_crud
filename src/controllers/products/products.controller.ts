import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from '../../services/products.service/products.service';
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getById(id);
  }
  @Get()
  getAllProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productService.getAll(limit, offset, brand);
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
