import Tag from "@/components/Tag";
import styles from "./CategoryPanelItem.module.css";

interface CategoryPanelItemProps {
  backgroundColor: string;
  textColor: string;
  name: string;
  itemsCount: number;
  amount: string;
}

function CategoryPanelItem({
  backgroundColor,
  textColor,
  name,
  itemsCount,
  amount,
}: CategoryPanelItemProps) {
  return (
    <div className={styles.container}>
      <Tag backgroundColor={backgroundColor} textColor={textColor}>
        {name}
      </Tag>
      <span className={styles.itemsCount}>
        {itemsCount} {itemsCount > 1 ? "itens" : "item"}
      </span>
      <span className={styles.amount}>R$ {amount}</span>
    </div>
  );
}

export default CategoryPanelItem;
