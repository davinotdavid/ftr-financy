import { CircleArrowUp, CircleArrowDown } from "lucide-react";
import styles from "./RecentTransactionItem.module.css";
import Tag from "@/components/Tag";

interface RecentTransactionItemProps {
  Icon: React.ElementType;
  title: string;
  category: string;
  transactionDate: string;
  transactionType: "income" | "expense";
  amount: string;
}

function RecentTransactionItem({
  Icon,
  title,
  category,
  transactionDate,
  transactionType,
  amount,
}: RecentTransactionItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.categoryIcon}>
        <Icon size={16} />
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{transactionDate}</p>
      </div>
      <div className={styles.categoryContainer}>
        <Tag
          backgroundColor="var(--colour-gray-200)"
          textColor="var(--colour-gray-800)"
        >
          {category}
        </Tag>
      </div>
      <div className={styles.amountContainer}>
        <p>
          {transactionType === "income" ? "+" : "-"} R$ {amount}
        </p>
        {transactionType === "income" ? (
          <CircleArrowUp size={16} className={styles[transactionType]} />
        ) : (
          <CircleArrowDown size={16} className={styles[transactionType]} />
        )}
      </div>
    </div>
  );
}

export default RecentTransactionItem;
