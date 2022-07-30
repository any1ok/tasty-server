import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/database.config';

@Module({
  imports: [BoardsModule, TypeOrmModule.forRoot(typeORMConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
