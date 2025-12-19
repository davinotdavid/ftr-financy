import { prismaClient } from "../../prisma/prisma";
import { CreateCategoryInput, UpdateCategoryInput } from "../dtos/input/expenseCategory.input";

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

  async updateExpenseCategory(id: string, data: UpdateCategoryInput) {
    const category = await prismaClient.expenseCategory.findUnique({
      where: { id }
    })

    if (!category) {
      throw new Error('Category not found')
    }

    return prismaClient.expenseCategory.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        icon: data.icon,
        colour: data.colour
      }
    })
  }

  async deleteExpenseCategory(id: string) {
    const category = await prismaClient.expenseCategory.findUnique({
      where: { id }
    })

    if (!category) {
      throw new Error('Category not found')
    }

    return prismaClient.expenseCategory.delete({
      where: { id }
    })
  }

  async listExpenseCategories() {
    return prismaClient.expenseCategory.findMany()
  }

  async findExpenseCategoryById(id: string) {
    return prismaClient.expenseCategory.findUnique({
      where: { id }
    })
  }
}