import { Field, GraphQLISODateTime, ID, ObjectType } from "type-graphql";
import { ExpenseModel } from "./expense.model";

@ObjectType()
export class UserModel {

  @Field(() => ID)
  id!: string

  @Field(() => String)
  name!: string

  @Field(() => String)
  email!: string

  @Field(() => String)
  password!: string

  @Field(() => GraphQLISODateTime)
  createdAt!: Date

  @Field(() => GraphQLISODateTime)
  updatedAt!: Date

  @Field(() => [ExpenseModel], { nullable: true })
  expenses?: ExpenseModel[]
}