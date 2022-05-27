import { registerEnumType } from '@nestjs/graphql';

export enum EnumRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

registerEnumType(EnumRole, { name: 'EnumRole' });
