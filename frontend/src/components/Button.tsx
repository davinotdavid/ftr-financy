import type { ButtonHTMLAttributes, ElementType } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: ElementType;
  variant?: "filled" | "outline";
  children?: React.ReactNode;
}

const Button = ({
  Icon,
  variant = "filled",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {Icon && <Icon size="18" />}
      {children}
    </button>
  );
};

export default Button;
