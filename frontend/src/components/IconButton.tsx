import type { ButtonHTMLAttributes, ElementType } from "react";
import styles from "./IconButton.module.css";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: ElementType;
  children?: React.ReactNode;
}

function IconButton({ Icon, children, ...props }: IconButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {Icon && <Icon size="16" />}
      {children}
    </button>
  );
}

export default IconButton;
