import { Field, GraphQLISODateTime, InputType, Int } from "type-graphql";
import { ExpenseType } from "../../../prisma/generated/enums";

@InputType()
export class CreateExpenseInput {

  @Field(() => String)
  title!: string

  @Field(() => ExpenseType)
  expenseType!: ExpenseType

  @Field(() => GraphQLISODateTime)
  expenseDate!: Date

  @Field(() => Int)
  amount: number
}