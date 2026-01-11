import IconButton from "@/components/IconButton";
import styles from "./CategoriesList.module.css";
import { SquarePen, Trash, Utensils } from "lucide-react";
import Tag from "@/components/Tag";

function CategoriesList() {
  return (
    <ul className={styles.ul}>
      <li>
        <header>
          <div className={styles.categoryIcon}>
            <Utensils size={16} />
          </div>
          <div className={styles.categoryActions}>
            <IconButton Icon={Trash} color="var(--colour-red-base)" />
            <IconButton Icon={SquarePen} />
          </div>
        </header>

        <div className={styles.categoryInfo}>
          <h3>Alimentação</h3>
          <p>Restaurantes, delivery e refeições</p>
        </div>

        <footer>
          <Tag
            backgroundColor="var(--colour-blue-light)"
            textColor="var(--colour-blue-dark)"
          >
            Alimentação
          </Tag>

          <p>12 itens</p>
        </footer>
      </li>
    </ul>
  );
}

export default CategoriesList;
