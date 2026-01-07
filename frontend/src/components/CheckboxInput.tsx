import styles from "./CheckboxInput.module.css";

interface CheckboxInputProps {
  label: string;
}

const CheckboxInput = ({ label }: CheckboxInputProps) => {
  return (
    <label className={styles.label}>
      <input type="checkbox" />
      <span>{label}</span>
    </label>
  );
};

export default CheckboxInput;
