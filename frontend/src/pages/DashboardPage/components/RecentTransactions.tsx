import { Link } from "react-router";
import { ChevronRight, Plus } from "lucide-react";
import styles from "./RecentTransactions.module.css";
import RecentTransactionItem from "./RecentTransactionItem";

function RecentTransactions() {
  return (
    <section className={styles.section}>
      <header>
        <h3>Transações Recentes</h3>
        <Link to="/transactions" className={styles.seeAllLink}>
          Ver todas
          <ChevronRight size={20} />
        </Link>
      </header>

      <RecentTransactionItem
        Icon={ChevronRight}
        title="Pagamento de Salário"
        category="Receita"
        amount={"4.250,00"}
        transactionDate="01/12/25"
        transactionType="income"
      />

      <footer>
        <button>
          <Plus size={20} />
          Nova Transação
        </button>
      </footer>
    </section>
  );
}

export default RecentTransactions;
