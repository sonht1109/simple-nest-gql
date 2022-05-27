import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from 'src/account/dto/login.input';
import { Account } from 'src/account/entities/account.entity';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Account)
  async login(@Args('input') input: LoginInput) {
    return this.authService.login(input);
  }
}
