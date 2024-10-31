import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Portfolio } from 'src/models/Portfolio';
import { Express } from 'express';

@Controller('portfolios')
export class PortfoliosController {
  portfolios: Portfolio[] = [];

  @Get()
  getAll(@Body() params?: any) {
    if (params?.title) {
      console.log(params.title);
      const res = this.portfolios.filter((el) => el.title === params.title);
      console.log(res);
      return res;
    } else {
      return this.portfolios;
    }
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  addNewPortfolio(
    @Body() params: any,
    @UploadedFile() image: Express.Multer.File,
  ) {
    this.portfolios.push({
      title: params.title,
      description: params.description,
      shortDescription: params.shortDescription,
      isVisible: params.isVisible,
      image: image,
      link: params.link,
    });
    console.log(image);
  }

  @Delete()
  removePortfolio(@Body() params: any) {
    const index = this.portfolios.findIndex((el) => el.title === params.title);
    if (index !== -1) {
      this.portfolios.splice(index, 1);
    }
    return this.portfolios;
  }

  @Put()
  @UseInterceptors(FileInterceptor('image'))
  updatePortfolio(
    @Body() params: any,
    @UploadedFile() image: Express.Multer.File,
  ) {
    const index = this.portfolios.findIndex((el) => el.title === params.title);
    if (index !== -1) {
      this.portfolios[index] = {
        title: params.title,
        description: params.description,
        shortDescription: params.shortDescription,
        image: image,
        link: params.link,
        isVisible: params.isVisible,
      };
    }
    return this.portfolios;
  }
}
