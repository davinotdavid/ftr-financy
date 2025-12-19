import { prismaClient } from "../../prisma/prisma";
import { CreateExpenseInput } from "../dtos/input/expense.input";

export class ExpenseService {
  async create(
    ownerId: string,
    categoryId: string,
    data: CreateExpenseInput
  ) {
    const category = await prismaClient.expenseCategory.findUnique({
      where: {
        id: categoryId
      }
    })

    if (!category) {
      throw new Error('Category not found!')
    }

    return prismaClient.expense.create({
      data: {
        ownerId,
        expenseCategoryId: categoryId,
        title: data.title,
        expenseType: data.expenseType,
        amount: data.amount,
        expenseDate: data.expenseDate
      }
    })
  }

  async listByOwner(ownerId: string) {
    return prismaClient.expense.findMany({
      where: {
        ownerId
      }
    })
  }
}