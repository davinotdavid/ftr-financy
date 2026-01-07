import { Mail, Lock, User, LogIn } from "lucide-react";
import { Link } from "react-router";
import styles from "./index.module.css";

// Components
import TextField from "@/components/TextField";
import Button from "@/components/Button";

function RegisterPage() {
  return (
    <section className={styles.card}>
      <header>
        <h1>Criar conta</h1>
        <p>Comece a controlar suas finanças ainda hoje</p>
      </header>

      <form>
        <div className={styles.formFieldsContainer}>
          <TextField
            name="name"
            label="Nome completo"
            type="text"
            placeholder="Seu nome completo"
            Icon={User}
          />
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
            help="A senha deve ter no mínimo 8 caracteres"
            showPasswordIcon
            Icon={Lock}
          />
        </div>

        <div className={styles.formActionsContainer}>
          <Button>Entrar</Button>

          <div className={styles.alternativeContainer}>
            <hr />
            <span>ou</span>
            <hr />
          </div>

          <div className={styles.doLoginContainer}>
            <p>Já tem uma conta?</p>
            <Link to="/login">
              <Button variant="outline" Icon={LogIn}>
                Fazer login
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RegisterPage;
