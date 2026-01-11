import { Plus } from "lucide-react";
import styles from "./index.module.css";
import Button from "@/components/Button";
import CategoriesSummary from "./components/CategoriesSummary";
import CategoriesList from "./components/CategoriesList";

function CategoriesPage() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h1>Categorias</h1>
          <p>Organize suas transações por categorias</p>
        </div>
        <Button Icon={Plus} size="small">
          Nova categoria
        </Button>
      </header>

      <CategoriesSummary />

      <CategoriesList />
    </>
  );
}

export default CategoriesPage;
