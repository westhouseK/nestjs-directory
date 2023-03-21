import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field({ nullable: true })
  remarks?: string;
}
