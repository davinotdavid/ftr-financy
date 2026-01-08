import { NavLink } from "react-router";
import styles from "./Header.module.css";
import Logo from "./Logo";
import UserAvatar from "./UserAvatar";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/transactions">Transações</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categorias</NavLink>
        </li>
      </ul>
      <UserAvatar>CT</UserAvatar>
    </header>
  );
}

export default Header;
