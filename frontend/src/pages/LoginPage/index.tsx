import { Mail, Lock, UserRoundPlus } from "lucide-react";
import { Link } from "react-router";
import styles from "./index.module.css";

// Components
import TextField from "@/components/TextField";
import CheckboxInput from "@/components/CheckboxInput";
import Button from "@/components/Button";

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
        <div className={styles.rememberMeContainer}>
          <CheckboxInput label="Lembrar-me" />
          <Link to="#">Recuperar senha</Link>
        </div>

        <div className={styles.formActionsContainer}>
          <Button>Entrar</Button>

          <div className={styles.alternativeContainer}>
            <hr />
            <span>ou</span>
            <hr />
          </div>

          <div className={styles.createAccountContainer}>
            <p>Ainda não tem uma conta?</p>
            <Link to="/register">
              <Button variant="outline" Icon={UserRoundPlus}>
                Criar conta
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

export default LoginPage;
