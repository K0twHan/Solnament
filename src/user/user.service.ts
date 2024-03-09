import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class UserService {

  constructor(private dbService : PrismaService){}


  async create(createUserDto: CreateUserDto) {
    const {coId,username,wallet,poolId} = createUserDto
    const oldUser = await this.dbService.user.findUnique({where : {wallet}})
    if(oldUser !== null)
    {
      throw new BadRequestException("Böyle bir kullanıcı mevcut")
    }
   await this.dbService.user.create({data : {coId,username,wallet,poolId}})
  }

  async findAll() {
    return this.dbService.user.findMany({select : {coId : true,username : true , poolId : true}});
  }

  async findOne(id: number) {
    return this.dbService.user.findUnique({where : {id},select : {coId : true,username:true,wallet: true}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const {wallet,username,poolId} = updateUserDto
    const updateUser = await this.dbService.user.findUnique({where : {id}})
    if(updateUser !== null)
    {
    const newUser =  await this.dbService.user.update({where: {id},data :{wallet,username,poolId}})
    }

  }

  remove(id: number) {
    return this.dbService.user.delete({where:{id}})
  }
}
