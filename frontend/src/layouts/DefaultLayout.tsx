import { Outlet } from "react-router"
import Header from "../components/Header"

function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout