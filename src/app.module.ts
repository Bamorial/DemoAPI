import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfoliosController } from './portfolios/portfolios.controller';

@Module({
  imports: [],
  controllers: [AppController, PortfoliosController],
  providers: [AppService],
})
export class AppModule {}
