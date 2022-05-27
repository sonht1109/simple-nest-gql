import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { EnumCode } from 'src/common/enum/enum.code';
import {
  AccountPaginationArgs,
  PaginatedAccount,
} from './dto/pagination.input';

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Mutation(() => Account)
  createAccount(@Args('input') createAccountInput: CreateAccountInput) {
    return this.accountService.create(createAccountInput);
  }

  @Query(() => PaginatedAccount)
  accounts(@Args() args: AccountPaginationArgs): Promise<PaginatedAccount> {
    return this.accountService.findAll(args);
  }

  @Query(() => Account)
  account(@Args('id', { type: () => Int }) id: number) {
    return this.accountService.findOne(id);
  }

  @Mutation(() => Account, { description: 'Update account' })
  updateAccount(@Args('input') updateAccountInput: UpdateAccountInput) {
    return this.accountService.update(
      updateAccountInput.id,
      updateAccountInput,
    );
  }

  @Mutation(() => EnumCode)
  async removeAccount(@Args('id', { type: () => Int }) id: number) {
    await this.accountService.remove(id);
    return EnumCode.SUCCESS;
  }
}
