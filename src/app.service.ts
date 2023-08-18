import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAll(): string {
    return 'Traigo todos los resultados';
  }
  getById(id): string {
    return `Mi ID: ${id} `;
  }

  findTwoParams(id, paramId) {
    return `Mi ID: ${id} y mi paramID: ${paramId}`;
  }

  findAll() {
    return `todos`;
  }
}
