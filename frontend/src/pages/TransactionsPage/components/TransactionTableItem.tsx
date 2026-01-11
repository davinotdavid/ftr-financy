import Tag from "@/components/Tag";
import styles from "./TransactionTableItem.module.css";
import { CircleArrowDown, CircleArrowUp, SquarePen, Trash } from "lucide-react";
import IconButton from "@/components/IconButton";

interface TransactionTableItemProps {
  title: string;
  CategoryIcon: React.ElementType;
  category: string;
  transactionDate: string;
  transactionType: "income" | "expense";
  amount: string;
}

function TransactionTableItem({
  title,
  CategoryIcon,
  category,
  transactionDate,
  transactionType,
  amount,
}: TransactionTableItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryIcon}>
          <CategoryIcon size={16} />
        </div>

        <p>{title}</p>
      </div>

      <p className={styles.date}>{transactionDate}</p>

      <div className={styles.categoryTag}>
        <Tag
          backgroundColor="var(--colour-blue-light)"
          textColor="var(--colour-blue-dark)"
        >
          {category}
        </Tag>
      </div>

      {transactionType === "income" ? (
        <div className={styles.income}>
          <CircleArrowUp size={16} className={styles.incomeIcon} />
          <span>Entrada</span>
        </div>
      ) : (
        <div className={styles.expense}>
          <CircleArrowDown size={16} className={styles.expenseIcon} />
          <span>Saída</span>
        </div>
      )}

      <p className={styles.amount}>
        {transactionType === "income" ? "+" : "-"} R$ {amount}
      </p>

      <div className={styles.actionsContainer}>
        <IconButton Icon={Trash} color="var(--colour-red-base)" />
        <IconButton Icon={SquarePen} />
      </div>
    </div>
  );
}

export default TransactionTableItem;
