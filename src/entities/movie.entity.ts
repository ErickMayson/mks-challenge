import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('increment')
  movieId: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  genre: string;

  @Column()
  director: string;

  @Column()
  year: number;
}
