import styles from "./index.module.css"

function LoginPage() {
  return (
    <section className={styles.card}>
      <header>
        <h1>Fazer login</h1>
        <p>Entre na sua conta para continuar</p>
      </header>
    </section>
  )
}

export default LoginPage