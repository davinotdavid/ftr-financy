import { ArrowDownUp, Tag as TagIcon, Utensils } from "lucide-react";
import styles from "./CategoriesSummary.module.css";

function CategoriesSummary() {
  return (
    <section className={styles.section}>
      <div className={styles.categorySummaryContainer}>
        <TagIcon
          size={32}
          className={styles.icon}
          color={"var(--colour-gray-700)"}
        />
        <div>
          <h3>8</h3>
          <p>Total de categorias</p>
        </div>
      </div>

      <div className={styles.categorySummaryContainer}>
        <ArrowDownUp
          size={32}
          className={styles.icon}
          color={"var(--colour-purple-base)"}
        />
        <div>
          <h3>27</h3>
          <p>Total de transações</p>
        </div>
      </div>

      <div className={styles.categorySummaryContainer}>
        <Utensils
          size={32}
          className={styles.icon}
          color={"var(--colour-blue-base)"}
        />
        <div>
          <h3>Alimentação</h3>
          <p>Categoria mais utilizada</p>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSummary;
