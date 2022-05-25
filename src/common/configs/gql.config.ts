import { ApolloDriver } from '@nestjs/apollo';
import { GqlModuleOptions } from '@nestjs/graphql';
import { join } from 'path';

export const gqlConfig: GqlModuleOptions = {
  driver: ApolloDriver,
  path: '/graphql',
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
};
