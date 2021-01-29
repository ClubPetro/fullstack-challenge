import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ICountry } from '../interfaces/ICountry';

@Entity('COUNTRY')
export class Country implements ICountry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  place_to_visit: string;

  @Column('integer')
  month: number;

  @Column('integer')
  year: number;

  @Column()
  flag: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
