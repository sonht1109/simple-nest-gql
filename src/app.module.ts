import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { GraphQLModule } from '@nestjs/graphql';
import { gqlConfig } from './common/configs/gql.config';

@Module({
  imports: [AccountModule, GraphQLModule.forRoot(gqlConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
