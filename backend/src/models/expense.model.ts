import { Field, GraphQLISODateTime, ID, ObjectType, Int, registerEnumType } from "type-graphql";
import { UserModel } from "./user.model";
import { ExpenseCategoryModel } from "./expenseCategory.model";
import { ExpenseType } from "../../prisma/generated/enums";

registerEnumType(ExpenseType, {
  name: 'ExpenseType'
})

@ObjectType()
export class ExpenseModel {

  @Field(() => ID)
  id!: string

  @Field(() => String)
  title!: string

  @Field(() => ExpenseType)
  expenseType!: ExpenseType

  @Field(() => GraphQLISODateTime)
  expenseDate!: Date

  @Field(() => Int)
  amount!: number

  @Field(() => String)
  ownerId!: string

  @Field(() => UserModel, { nullable: true })
  owner?: UserModel

  @Field(() => String)
  expenseCategoryId!: string

  @Field(() => ExpenseCategoryModel, { nullable: true })
  expenseCategory?: ExpenseCategoryModel

  @Field(() => GraphQLISODateTime)
  createdAt!: Date

  @Field(() => GraphQLISODateTime)
  updatedAt!: Date
}