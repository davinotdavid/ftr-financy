import TextField from "@/components/TextField"
import styles from "./index.module.css"

function LoginPage() {
  return (
    <section className={styles.card}>
      <header>
        <h1>Fazer login</h1>
        <p>Entre na sua conta para continuar</p>
      </header>

      <form>
        <TextField name="email" label="E-mail" type="email" />
        <TextField name="password" label="Senha" type="password" />
      </form>
    </section>
  )
}

export default LoginPage