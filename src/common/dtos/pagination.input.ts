import { Type } from '@nestjs/common';
import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { IsEnum, IsOptional, Min } from 'class-validator';
import { EnumOrder } from '../enum/enum.order';

@ObjectType()
class PaginationMetaConstructor {
  take: number;
  page: number;
  total: number;
}

@ArgsType()
export class PaginationArgs {
  @Field(() => EnumOrder, { defaultValue: EnumOrder.DESC, nullable: true })
  @IsOptional()
  @IsEnum(EnumOrder)
  order: EnumOrder;

  @Field(() => Int, { defaultValue: 10, nullable: true })
  @IsOptional()
  @Min(1)
  take: number;

  @Field(() => Int, { defaultValue: 1, nullable: true })
  @Min(1)
  @IsOptional()
  page: number;

  get skip(): number {
    return (this.page - 1) * this.page;
  }
}

@ObjectType()
export class PaginationMeta {
  @Field()
  readonly page: number;

  @Field()
  readonly take: number;

  @Field()
  readonly total: number;

  @Field()
  readonly totalPage: number;

  @Field()
  readonly hasPreviousPage: boolean;

  @Field()
  readonly hasNextPage: boolean;

  constructor(paging: PaginationMetaConstructor) {
    this.page = paging.page;
    this.take = paging.take;
    this.total = paging.total;
    this.totalPage = Math.ceil(this.total / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.totalPage;
  }
}

export interface IPaginated<T> {
  data: T[];
  meta: PaginationMeta;
}

export function Paginated<T>(classRef: Type<T>) {
  @ObjectType(`Paginated${classRef.name}`, { isAbstract: true })
  abstract class PaginatedType implements IPaginated<T> {
    @Field(() => [classRef])
    data: T[];

    @Field()
    meta: PaginationMeta;

    constructor(data: T[], meta: PaginationMeta) {
      this.meta = meta;
      this.data = data;
    }
  }
  return PaginatedType as Type<IPaginated<T>>;
}
