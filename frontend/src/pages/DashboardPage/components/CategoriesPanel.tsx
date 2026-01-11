import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import styles from "./CategoriesPanel.module.css";
import CategoryPanelItem from "./CategoryPanelItem";

function CategoriesPanel() {
  return (
    <section className={styles.container}>
      <header>
        <h3>Categorias</h3>
        <Link to="/transactions">
          Gerenciar
          <ChevronRight size={20} />
        </Link>
      </header>

      <div className={styles.contentContainer}>
        <CategoryPanelItem
          backgroundColor="#FF6B6B"
          textColor="#FFFFFF"
          name="Alimentação"
          itemsCount={12}
          amount="542,30"
        />
      </div>
    </section>
  );
}

export default CategoriesPanel;
