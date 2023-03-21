import { Module } from '@nestjs/common';

import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

import { join } from 'path';
import { TaskModule } from './task.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
