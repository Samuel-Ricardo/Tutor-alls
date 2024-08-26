import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './application/users/users.module';
import { PrismaModule } from './infra/engine/database/prisma/prisma.module';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
