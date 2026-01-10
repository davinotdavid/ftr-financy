import { Outlet } from "react-router";
import Header from "@/components/Header";
import styles from "./index.module.css";

function DefaultLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
