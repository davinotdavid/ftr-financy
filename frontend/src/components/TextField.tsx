import type { ElementType, FC, InputHTMLAttributes } from "react"
import styles from './TextField.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  Icon?: ElementType
  help?: string
}

const TextField: FC<InputProps> = ({ name, label, help, Icon, ...props }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>

      <div>
        {Icon && <Icon />}
        <input id={name} {...props}></input>
      </div>

      {help && <p>{help}</p>}
    </div>
  )
}

export default TextField