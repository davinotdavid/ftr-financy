import styles from "./Header.module.css";
import Logo from "./Logo";
import UserAvatar from "./UserAvatar";
import HeaderNavLink from "./HeaderNavLink";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        <ul>
          <li>
            <HeaderNavLink to="/dashboard">Dashboard</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink to="/transactions">Transações</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink to="/categories">Categorias</HeaderNavLink>
          </li>
        </ul>
        <UserAvatar>CT</UserAvatar>
      </div>
    </header>
  );
}

export default Header;
