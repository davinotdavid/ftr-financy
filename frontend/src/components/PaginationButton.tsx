import type { ButtonHTMLAttributes } from "react";
import styles from "./PaginationButton.module.css";

interface PaginationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  active?: boolean;
}

function PaginationButton({
  children,
  active,
  ...props
}: PaginationButtonProps) {
  return (
    <button
      className={styles.button + (active ? " " + styles.active : "")}
      {...props}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
