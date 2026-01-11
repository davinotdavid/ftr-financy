import type { ButtonHTMLAttributes, ElementType } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: ElementType;
  variant?: "filled" | "outline";
  size?: "small" | "normal";
  children?: React.ReactNode;
}

const Button = ({
  Icon,
  variant = "filled",
  size = "normal",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      {...props}
    >
      {Icon && <Icon size="18" />}
      {children}
    </button>
  );
};

export default Button;
