import { Arg, FieldResolver, Mutation, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { ExpenseCategoryModel } from "../models/expenseCategory.model";
import { IsAuth } from "../middlewares/auth.middleware";
import { ExpenseCategoryService } from "../services/expenseCategory.service";
import { CreateCategoryInput, UpdateCategoryInput } from "../dtos/input/expenseCategory.input";
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

  @Mutation(() => ExpenseCategoryModel)
  async updateExpenseCategory(
    @Arg('data', () => UpdateCategoryInput) data: UpdateCategoryInput,
    @Arg('id', () => String) id: string
  ): Promise<ExpenseCategoryModel> {
    return this.expenseCategoryService.updateExpenseCategory(id, data)
  }

  @Query(() => [ExpenseCategoryModel])
  async listExpenseCategories(): Promise<ExpenseCategoryModel[]> {
    return this.expenseCategoryService.listExpenseCategories()
  }

  @Mutation(() => Boolean)
  async deleteExpenseCategory(
    @Arg('id', () => String) id: string
  ): Promise<boolean> {
    await this.expenseCategoryService.deleteExpenseCategory(id)
    return true
  }

  @FieldResolver(() => UserModel)
  async owner(@Root() expenseCategory: ExpenseCategoryModel): Promise<UserModel> {
    return this.userService.findUser(expenseCategory.ownerId)
  }
}