import type { ReactNode } from "react";
import { Link } from "react-router";
import styles from "./UserAvatar.module.css";

interface UserAvatarProps {
  children: ReactNode;
}

function UserAvatar({ children }: UserAvatarProps) {
  return (
    <Link to="#">
      <button className={styles.button}>{children}</button>
    </Link>
  );
}

export default UserAvatar;
