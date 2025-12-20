import { Link, Outlet } from "react-router"
import Logo from "@/components/Logo"
import styles from "./index.module.css"

function AuthLayout() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <Logo />
        </Link>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}

export default AuthLayout