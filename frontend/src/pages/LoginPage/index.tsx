import { Mail, Lock } from "lucide-react";
import TextField from "@/components/TextField";
import styles from "./index.module.css";

function LoginPage() {
  return (
    <section className={styles.card}>
      <header>
        <h1>Fazer login</h1>
        <p>Entre na sua conta para continuar</p>
      </header>

      <form>
        <TextField
          name="email"
          label="E-mail"
          type="email"
          placeholder="mail@exemplo.com"
          Icon={Mail}
        />
        <TextField
          name="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          showPasswordIcon
          Icon={Lock}
        />
      </form>
    </section>
  );
}

export default LoginPage;
