import { Injectable } from '@nestjs/common';
import { AccountRepo } from './account.repository';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import {
  AccountPaginationArgs,
  PaginatedAccount,
} from './dto/pagination.input';
import { PaginationMeta } from '../common/dtos/pagination.input';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepo: AccountRepo) {}

  async create(createAccountInput: CreateAccountInput) {
    return await this.accountRepo.save(createAccountInput);
  }

  async findAll(args: AccountPaginationArgs): Promise<PaginatedAccount> {
    const { order, page, skip, take } = args;

    const [accounts, total] = await this.accountRepo
      .createQueryBuilder('a')
      .take(take)
      .skip(skip)
      .orderBy('a.createdAt', order)
      .getManyAndCount();

    return new PaginatedAccount(
      accounts,
      new PaginationMeta({ take, page, total }),
    );
  }

  async findOne(id: number) {
    return await this.accountRepo.findOne({ where: { id } });
  }

  async update(id: number, updateAccountInput: UpdateAccountInput) {
    return await this.accountRepo.save({ ...updateAccountInput, id });
  }

  async remove(id: number) {
    return await this.accountRepo.delete(id);
  }
}
