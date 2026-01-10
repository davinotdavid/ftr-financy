import { NavLink } from "react-router";
import styles from "./HeaderNavLink.module.css";

interface HeaderNavLinkProps {
  to: string;
  children: React.ReactNode;
}

function HeaderNavLink({ to, children }: HeaderNavLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.activeLink}` : styles.link
      }
    >
      {children}
    </NavLink>
  );
}

export default HeaderNavLink;
