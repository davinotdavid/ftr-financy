import type { ButtonHTMLAttributes, ElementType } from "react";
import style from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: ElementType;
  variant?: "filled" | "outline";
}

const Button = ({ Icon, variant = "filled", ...props }: ButtonProps) => {
  return <button className={`${style.button} ${style[variant]}`} {...props} />;
};

export default Button;
