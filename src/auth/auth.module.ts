import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepo } from 'src/account/account.repository';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountRepo])],
  providers: [AuthResolver, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
