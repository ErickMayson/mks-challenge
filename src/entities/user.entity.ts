import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  userId: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}
