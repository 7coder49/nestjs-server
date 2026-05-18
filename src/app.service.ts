import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users)
    private userRepo: Repository<Users>
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  getGreet(): string {
    return "This is come from Ayyanar";
  }

  async getAllUsers(): Promise<any> {
    const data = await this.userRepo.find();
    return {
      data: data,
    };
  }

  async createUser(payload: any): Promise<any> {
    console.log('payload',payload);
    
    await this.userRepo.save({name: payload.name, dept: payload.dept, age: payload.age});

    return { message: "User created successfully" };
  }
}
