import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getStared(): string {
    return 'Esto es un servicio';
  }
  getId(id) {
    return `Mi ID: ${id} `;
  }

  findTwoParams(id, paramId) {
    return `Mi ID: ${id} y mi paramID: ${paramId}`;
  }

  findAll() {
    return `todos`;
  }
}
