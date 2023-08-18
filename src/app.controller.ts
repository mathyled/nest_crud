import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('stared')
  getStared(): string {
    return this.appService.getStared();
  }
  @Get('products/:id')
  getId(@Param('id') id: string) {
    return this.appService.getId(id);
  }

  @Get('producto/:id/articulo/:paramId')
  findTwoParams(@Param('id') id: string, @Param('paramId') paramId: string) {
    return this.appService.findTwoParams(id, paramId);
  }
}
