import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepo } from './account.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AccountRepo])],
  providers: [AccountResolver, AccountService],
  exports: [AccountService],
})
export class AccountModule {}
