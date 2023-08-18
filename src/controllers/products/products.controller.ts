import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../../app.service';

// Crear: createProduct
// Actualizar: updateProduct
// Eliminar: deleteProduct
@Controller('products')
export class ProductsController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.appService.getById(id);
  }
  @Get()
  getAllProducts() {
    return this.appService.getAll();
  }
}
