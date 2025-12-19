import { Arg, FieldResolver, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { UserModel } from "../models/user.model";
import { UserService } from "../services/user.service";
import { IsAuth } from "../middlewares/auth.middleware";
import { ExpenseModel } from "../models/expense.model";
import { ExpenseService } from "../services/expense.service";
import { ExpenseCategoryModel } from "../models/expenseCategory.model";
import { ExpenseCategoryService } from "../services/expenseCategory.service";

@Resolver(() => UserModel)
@UseMiddleware(IsAuth)
export class UserResolver {
  private userService = new UserService()
  private expenseService = new ExpenseService()
  private expenseCategoryService = new ExpenseCategoryService()

  @Query(() => UserModel)
  async getUser(@Arg('id', () => String) id: string): Promise<UserModel> {
    return this.userService.findUser(id)
  }

  @FieldResolver(() => [ExpenseModel])
  async expenses(@Root() user: UserModel): Promise<ExpenseModel[]> {
    return this.expenseService.listByOwner(user.id)
  }

  @FieldResolver(() => [ExpenseCategoryModel])
  async expenseCategories(@Root() user: UserModel): Promise<ExpenseCategoryModel[]> {
    return this.expenseCategoryService.listExpenseCategoryByOwner(user.id)
  }
}