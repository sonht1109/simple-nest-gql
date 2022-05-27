import { registerEnumType } from '@nestjs/graphql';

export enum EnumCode {
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

registerEnumType(EnumCode, { name: 'EnumCode' });
