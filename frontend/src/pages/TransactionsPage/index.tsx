import { Plus } from "lucide-react";
import styles from "./index.module.css";
import Button from "@/components/Button";
import SearchFilters from "./components/SearchFilters";
import TransactionsTable from "./components/TransactionsTable";

function TransactionsPage() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h1>Transações</h1>
          <p>Gerencie todas as suas transações financeiras</p>
        </div>
        <Button Icon={Plus} size="small">
          Nova transação
        </Button>
      </header>

      <SearchFilters />
      <TransactionsTable />
    </>
  );
}

export default TransactionsPage;
