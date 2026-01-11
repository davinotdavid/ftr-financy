import type { ReactNode } from "react";
import styles from "./Tag.module.css";

interface TagProps {
  backgroundColor: string;
  textColor: string;
  children: ReactNode;
}

function Tag({ children, backgroundColor, textColor }: TagProps) {
  return (
    <div className={styles.tagContainer} style={{ backgroundColor }}>
      <p style={{ color: textColor }}>{children}</p>
    </div>
  );
}

export default Tag;
