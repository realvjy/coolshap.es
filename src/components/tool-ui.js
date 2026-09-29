// Controls shared by the tools (playground, icon maker) so they match exactly.
import styles from "./tool.module.css";

export function Range({ label, value, min, max, unit = "%", onChange }) {
  return (
    <label className={styles.range}>
      <span>{label}</span>
      <output>
        {value}
        {unit}
      </output>
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

export function Color({ label, value, onChange }) {
  return (
    <label className={styles.color}>
      <span>{label}</span>
      <span className={styles.colorValue}>{value}</span>
      <input
        type="color"
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
