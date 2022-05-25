import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Account {
  @Field(() => Int)
  exampleField: number;
}
