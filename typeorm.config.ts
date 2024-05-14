import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '',
  password: '1234',
  database: 'dbtest',
  entities: [__dirname + '/src/Entities/*.entity.{ts,js}'],
  synchronize: true,
  logging: true,
};
