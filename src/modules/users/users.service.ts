import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUser } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUser } from './dto/update-user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}

  async createUser(data: CreateUser) {
    const checkUser = await this.prisma.user.findFirst({
        where:{ username: data.username}
    })
    
    if(checkUser){
        throw new ConflictException("User already exists")
    }

    const newUser = new User()
    Object.assign(newUser,{...data})
    const user =  await this.prisma.user.create( { data:{ ...newUser}  } )

    return plainToInstance(User,user);
  }

  async getUsers() {
    const users = await this.prisma.user.findMany()

    return plainToInstance(User,users);
  }

  async findUser(id:string) {
    
    const user = await this.prisma.user.findUnique({ where:{id}})
    if(!user){
      throw new NotFoundException("Username not exists")
    }

    return plainToInstance(User,user);
  }

  async findByUsername(username: string) {
    const findUser = await this.prisma.user.findFirst({
      where: { username },
    });

    return findUser;
  }

  async updateUSer(id: string ,data: UpdateUser) {
    if(data.username){
      const checkUser = await this.prisma.user.findFirst({
        where:{ username: data.username}
      })
      if(checkUser){
        throw new ConflictException("Username already exists")
      }
    }

    const user = await this.prisma.user.findUnique({ where:{id}})
    if(!user){
      throw new NotFoundException("Username not exists")
    }
    const currentUser = await this.prisma.user.update({
      where:{id},
      data: {...data}
    })

    return plainToInstance(User,currentUser)
  }

  async deleteUser(id: string) {
    const user = await this.prisma.user.findUnique({ where:{id}})
    if(!user){
      throw new NotFoundException("Username not exists")
    }
    await this.prisma.user.delete({where:{id}})

    return "User deleted!"
  }
}
