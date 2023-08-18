import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { UsersController } from './controllers/users/users.controller';
import { ProductsController } from './controllers/products/products.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { CostumersController } from './controllers/costumers/costumers.controller';
import { OrdersController } from './controllers/orders/orders.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    UsersController,
    ProductsController,
    BrandsController,
    CostumersController,
    OrdersController,
  ],
  providers: [AppService],
})
export class AppModule {}
