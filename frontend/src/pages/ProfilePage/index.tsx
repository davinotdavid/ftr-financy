import { LogOut, Mail } from "lucide-react";
import { Link } from "react-router";
import styles from "./index.module.css";

// Components
import TextField from "@/components/TextField";
import Button from "@/components/Button";

function ProfilePage() {
  return (
    <section className={styles.card}>
      <header>
        <div className={styles.avatar}>CT</div>
        <div>
          <h1>Conta teste</h1>
          <p>conta@teste.com</p>
        </div>
      </header>

      <hr />

      <form>
        <TextField
          name="email"
          label="Nome completo"
          type="text"
          placeholder="Seu nome completo"
          Icon={Mail}
        />
        <TextField
          name="email"
          label="E-mail"
          type="email"
          placeholder="conta@test.com"
          help="O e-mail não pode ser alterado"
          Icon={Mail}
        />
      </form>

      <div className={styles.formActionsContainer}>
        <Link to="#">
          <Button>Salvar alterações</Button>
        </Link>

        <Link to="#">
          <Button
            variant="outline"
            Icon={LogOut}
            iconColor="var(--colour-danger)"
          >
            Sair da conta
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default ProfilePage;
