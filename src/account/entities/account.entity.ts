import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('account')
export class Account {
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', unique: true })
  username: string;

  @Field()
  @Column({ type: 'varchar' })
  password: string;
}
