import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  createHello():string{
   return 'created' 
  }
  @Put()
  updateHello():string{
    return 'updated'
  }
  @Delete()
  deleteHello(){
    return 'deleted'
  }
}
