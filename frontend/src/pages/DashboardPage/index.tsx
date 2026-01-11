import styles from "./index.module.css";
import { Wallet, CircleArrowUp, CircleArrowDown } from "lucide-react";

import SummaryCard from "./components/SummaryCard";
import RecentTransactions from "./components/RecentTransactions";
import CategoriesPanel from "./components/CategoriesPanel";

function DashboardPage() {
  return (
    <>
      <div className={styles.summaryContainer}>
        <SummaryCard title="Saldo Total" Icon={Wallet} cardType="total">
          R$ 12.847,32
        </SummaryCard>
        <SummaryCard
          title="Receitas do mês"
          Icon={CircleArrowUp}
          cardType="income"
        >
          R$ 4.250,00
        </SummaryCard>
        <SummaryCard
          title="Despesas do mês"
          Icon={CircleArrowDown}
          cardType="expense"
        >
          R$ 2.180,45
        </SummaryCard>
      </div>

      <div className={styles.mainContentContainer}>
        <RecentTransactions />
        <CategoriesPanel />
      </div>
    </>
  );
}

export default DashboardPage;
