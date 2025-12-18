import { prismaClient } from "../../prisma/prisma";
import { CreateCategoryInput } from "../dtos/input/expenseCategory.input";

export class ExpenseCategoryService {
  async createExpenseCategory(data: CreateCategoryInput, ownerId: string) {
    return prismaClient.expenseCategory.create({
      data: {
        title: data.title,
        description: data.description,
        icon: data.icon,
        colour: data.colour,
        ownerId
      }
    })
  }
}