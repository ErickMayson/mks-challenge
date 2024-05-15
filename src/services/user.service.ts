import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async InsertQueryBuilder(
    username: string,
    password: string,
  ): Promise<InsertResult> {
    const user = new User();
    user.username = username;
    user.password = password;
    return await this.userRepository.insert(user);
  }

  async findOne(username: string): Promise<User> | undefined {
    return await this.userRepository.findOneBy({ username });
  }
}
