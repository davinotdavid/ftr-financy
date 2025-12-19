import { Arg, FieldResolver, Mutation, Resolver, Root } from "type-graphql";
import { ExpenseModel } from "../models/expense.model";
import { CreateExpenseInput } from "../dtos/input/expense.input";
import { ExpenseService } from "../services/expense.service";
import { GqlUser } from "../graphql/decorators/user.decorator";
import { User } from "../../prisma/generated/client";
import { ExpenseCategoryModel } from "../models/expenseCategory.model";
import { ExpenseCategoryService } from "../services/expenseCategory.service";
import { UserModel } from "../models/user.model";
import { UserService } from "../services/user.service";

@Resolver(() => ExpenseModel)
export class ExpenseResolver {
  private expenseService = new ExpenseService()
  private expenseCategoryService = new ExpenseCategoryService()
  private userService = new UserService()

  @Mutation(() => ExpenseModel)
  async createExpense(
    @Arg('categoryId', () => String) categoryId: string,
    @Arg('data', () => CreateExpenseInput) data: CreateExpenseInput,
    @GqlUser() user: User
  ): Promise<ExpenseModel> {
    return this.expenseService.create(user.id, categoryId, data)
  }

  @FieldResolver(() => ExpenseCategoryModel)
  async expenseCategory(@Root() expense: ExpenseModel): Promise<ExpenseCategoryModel> {
    return this.expenseCategoryService.findExpenseCategoryById(expense.expenseCategoryId)
  }

  @FieldResolver(() => UserModel)
  async owner(@Root() expense: ExpenseModel): Promise<UserModel> {
    return this.userService.findUser(expense.ownerId)
  }
}