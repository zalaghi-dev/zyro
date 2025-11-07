import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasourceOptions } from '../db/datasourceOptions';

@Module({
  imports: [ConfigModule, TypeOrmModule.forRoot(datasourceOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
