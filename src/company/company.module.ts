import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports : [PrismaModule],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
