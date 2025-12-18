import { Arg, FieldResolver, Mutation, Resolver, Root, UseMiddleware } from "type-graphql";
import { ExpenseCategoryModel } from "../models/expenseCategory.model";
import { IsAuth } from "../middlewares/auth.middleware";
import { ExpenseCategoryService } from "../services/expenseCategory.service";
import { CreateCategoryInput } from "../dtos/input/expenseCategory.input";
import { GqlUser } from "../graphql/decorators/user.decorator";
import { User } from "../../prisma/generated/client";
import { UserModel } from "../models/user.model";
import { UserService } from "../services/user.service";

@Resolver(() => ExpenseCategoryModel)
@UseMiddleware(IsAuth)
export class ExpenseCategoryResolver {
  private expenseCategoryService = new ExpenseCategoryService()
  private userService = new UserService()

  @Mutation(() => ExpenseCategoryModel)
  async createExpenseCategory(
    @Arg('data', () => CreateCategoryInput) data: CreateCategoryInput,
    @GqlUser() user: User
  ): Promise<ExpenseCategoryModel> {
    return this.expenseCategoryService.createExpenseCategory(data, user.id)
  }

  @FieldResolver(() => UserModel)
  async owner(@Root() expenseCategory: ExpenseCategoryModel): Promise<UserModel> {
    return this.userService.findUser(expenseCategory.ownerId)
  }
}