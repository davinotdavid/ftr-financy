import type { ElementType, ReactNode } from "react";
import styles from "./SummaryCard.module.css";

interface SummaryCardProps {
  title: string;
  Icon: ElementType;
  children: ReactNode;
  cardType: "income" | "expense" | "total";
}

function SummaryCard({ Icon, title, cardType, children }: SummaryCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Icon size="20" className={styles[cardType]} />
        <h3>{title}</h3>
      </div>
      <p>{children}</p>
    </div>
  );
}

export default SummaryCard;
