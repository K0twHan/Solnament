import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { wallets } from './dto/wallets';

@Controller('api/company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }
  @Post()
  instert(@Body() wallets : wallets){
    return this.companyService.insert(wallets)
  }
  
  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}
