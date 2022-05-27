import { InputType, Field } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { EnumRole } from 'src/common/enum/enum.role';

@InputType()
export class CreateAccountInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field(() => EnumRole)
  @IsEnum(EnumRole)
  role: EnumRole;
}
