import { Injectable } from '@nestjs/common';
import { AccountRepo } from 'src/account/account.repository';
import { LoginInput } from 'src/account/dto/login.input';

@Injectable()
export class AuthService {
  constructor(private readonly accountRepo: AccountRepo) {}

  async login(input: LoginInput) {
    return await this.accountRepo.findOne({
      where: { username: input.username, password: input.password },
    });
  }
}
