import { Search } from "lucide-react";
import TextField from "@/components/TextField";
import styles from "./SearchFilters.module.css";

function SearchFilters() {
  return (
    <section className={styles.section}>
      <TextField
        label="Buscar"
        name="search"
        Icon={Search}
        placeholder="Buscar por descrição"
      />
      <TextField label="Tipo" name="type" placeholder="Tipo de transação" />
      <TextField
        label="Categoria"
        name="category"
        placeholder="Categoria da transação"
      />
      <TextField
        label="Período"
        name="period"
        placeholder="Período da transação"
      />
    </section>
  );
}

export default SearchFilters;
