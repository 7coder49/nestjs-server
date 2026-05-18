import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  getGreet(): string {
    return this.appService.getGreet();
  }

  @Get('getAllUsers')
  getAllUsers(): any {
    return this.appService.getAllUsers();
  }

  @Post('createUser')
  createUser(@Body() payload: any): any {
    return this.appService.createUser(payload);
  }
}
