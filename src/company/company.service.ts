import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import {  wallets } from './dto/wallets';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private dbService : PrismaService){}

  async create(createCompanyDto: CreateCompanyDto) {
    const {name,akey} = createCompanyDto
    const company = await this.dbService.company.create({data : {name,akey}})
    return company
  }

  findAll() {
    return this.dbService.company.findMany();
  }

  findOne(id: number) {
    return this.dbService.company.findUnique({where : {id}})
  }


  remove(id: number) {
    return this.dbService.company.delete({where : {id}});
  }
  async insert(wallets : wallets)
  {
    const {wallet,coId} = wallets
    const id = coId
    const ok = this.dbService.company.findFirst({where : {id}})
    if(ok !== null)
    {
      const datas = this.dbService.pool.findUnique({where : {id}})
      const newData = [...(await datas).wallet, ...wallet]
      await this.dbService.pool.update({where :{id: id},data : { wallet : newData}})
    }
    else
    {
      await this.dbService.pool.create({data : {wallet,coId}})
      //
    }
  }
}
