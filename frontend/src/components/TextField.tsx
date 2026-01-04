import {
  useState,
  type ElementType,
  type FC,
  type InputHTMLAttributes,
} from "react";
import { Eye, EyeClosed } from "lucide-react";
import styles from "./TextField.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  Icon?: ElementType;
  help?: string;
  showPasswordIcon?: boolean;
}

const TextField: FC<InputProps> = ({
  name,
  label,
  help,
  type,
  showPasswordIcon,
  Icon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>

      <div className={styles.iconInputContainer}>
        {Icon && <Icon size="16" className={styles.icon} />}

        <input id={name} type={showPassword ? "text" : type} {...props}></input>

        {showPasswordIcon && (
          <button
            onClick={handleShowPasswordClick}
            className={styles.showPasswordButton}
          >
            {showPassword ? <Eye size="16" /> : <EyeClosed size="16" />}
          </button>
        )}
      </div>

      {help && <p className={styles.helpText}>{help}</p>}
    </div>
  );
};

export default TextField;
