import IconButton from "@/components/IconButton";
import styles from "./TransactionsTable.module.css";
import { ChevronLeft, ChevronRight, Utensils, CreditCard } from "lucide-react";
import PaginationButton from "@/components/PaginationButton";
import TransactionTableItem from "./TransactionTableItem";

function TransactionsTable() {
  return (
    <section className={styles.section}>
      <header>
        <h4>Descrição</h4>
        <h4 className={styles.textCenter}>Data</h4>
        <h4 className={styles.textCenter}>Categoria</h4>
        <h4 className={styles.textCenter}>Tipo</h4>
        <h4 className={styles.textRight}>Valor</h4>
        <h4 className={styles.textRight}>Ações</h4>
      </header>

      <div>
        <TransactionTableItem
          title="Jantar no restaurante"
          CategoryIcon={Utensils}
          category="Alimentação"
          transactionDate="30/11/25"
          transactionType="expense"
          amount="150,00"
        />
        <TransactionTableItem
          title="Salário"
          CategoryIcon={CreditCard}
          category="Salário"
          transactionDate="28/11/25"
          transactionType="income"
          amount="5.000,00"
        />
      </div>

      <footer>
        <div>
          <span>
            <span className={styles.resultsText}>1</span> a{" "}
            <span className={styles.resultsText}>10</span> | 27 resultados
          </span>
        </div>

        <div className={styles.paginationButtons}>
          <IconButton Icon={ChevronLeft} aria-label="Página anterior" />
          <PaginationButton active>1</PaginationButton>
          <PaginationButton>2</PaginationButton>
          <PaginationButton>3</PaginationButton>
          <IconButton Icon={ChevronRight} aria-label="Próxima página" />
        </div>
      </footer>
    </section>
  );
}

export default TransactionsTable;
