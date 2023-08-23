import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getById(id): string {
    return `Mi ID: ${id} `;
  }

  findTwoParams(id, paramId) {
    return `Mi ID: ${id} y mi paramID: ${paramId}`;
  }

  getAll(limit, offset, brand): string {
    return `limit ${limit} - offset ${offset}  -  brand${brand}`;
  }
}
