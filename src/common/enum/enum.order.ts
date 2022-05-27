import { registerEnumType } from '@nestjs/graphql';

export enum EnumOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

registerEnumType(EnumOrder, { name: 'EnumOrder' });
