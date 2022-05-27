import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { GraphQLModule } from '@nestjs/graphql';
import { gqlConfig } from './common/configs/gql.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './common/configs/orm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AccountModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot(gqlConfig),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: ormConfig,
      inject: [ConfigService],
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
