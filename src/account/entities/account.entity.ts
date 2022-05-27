import { ObjectType, Field, Extensions } from '@nestjs/graphql';
import { EnumRole } from 'src/common/enum/enum.role';
import { FieldGuard } from 'src/common/guards/field.guard';
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

  @Extensions({ role: EnumRole.ADMIN, authIdField: 'id' })
  @Field({ middleware: [FieldGuard] })
  @Column({ type: 'varchar' })
  password: string;

  @Field(() => EnumRole)
  @Column({ type: 'enum', enum: EnumRole, default: EnumRole.USER })
  role: EnumRole;
}
