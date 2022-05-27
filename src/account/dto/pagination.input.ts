import { ArgsType, ObjectType } from '@nestjs/graphql';
import { Paginated, PaginationArgs } from 'src/common/dtos/pagination.input';
import { Account } from '../entities/account.entity';

@ArgsType()
export class AccountPaginationArgs extends PaginationArgs {}

@ObjectType()
export class PaginatedAccount extends Paginated(Account) {}
