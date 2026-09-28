"use client";

import { Children, forwardRef, useId, useRef } from "react";
import * as Select from "@radix-ui/react-select";
import { motion, useReducedMotion } from "framer-motion";
import {
  RiSearchLine,
  RiCloseLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiCheckLine,
} from "@remixicon/react";
import styles from "./site-controls.module.css";

// The collection's expanding search, shared by tools and the homepage.
export const SearchField = forwardRef(function SearchField(
  { value, onChange, label = "Search shapes", title, className = "" },
  ref,
) {
  const input = useRef(null);
  return (
    <label
      className={`${styles.search} ${value ? styles.searchActive : ""} ${className}`}
      title={title}
    >
      <RiSearchLine size={14} aria-hidden="true" />
      <input
        ref={(node) => {
          input.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        aria-label={label}
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            onChange("");
            e.currentTarget.blur();
          }
        }}
      />
      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => {
            onChange("");
            input.current?.focus();
          }}
        >
          <RiCloseLine size={13} />
        </button>
      )}
    </label>
  );
});

export function Switch({
  label,
  checked,
  onChange,
  disabled = false,
  between = false,
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={`${styles.toggle} ${between ? styles.between : ""}`}
      onClick={() => onChange(!checked)}
    >
      <span className={styles.switch} aria-hidden="true">
        <span />
      </span>
      <span>{label}</span>
    </button>
  );
}

export function ChoicePills({
  label,
  value,
  onChange,
  options,
  className = "",
  compact = false,
}) {
  const id = useId();
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      layoutScroll
      role="group"
      aria-label={label}
      className={`${styles.choices} ${compact ? styles.compact : ""} ${className}`}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
        >
          {value === option.value && (
            <motion.span
              layoutId={`${id}-pill`}
              className={styles.pill}
              transition={{
                type: "spring",
                bounce: 0.14,
                duration: reducedMotion ? 0 : 0.6,
              }}
            />
          )}
          <span className={styles.pillLabel}>
            {option.label}
            {option.count !== undefined && <sup>{option.count}</sup>}
          </span>
        </button>
      ))}
    </motion.div>
  );
}

// Keep the existing option API while sharing a fully styled, keyboard-accessible
// menu. Radix handles focus, typeahead, outside clicks, and viewport collisions.
export function SelectField({
  children,
  className = "",
  value,
  onChange,
  disabled,
  name,
  ...props
}) {
  const emptyValue = "__coolshapes_empty__";
  const options = Children.toArray(children).map((child) => ({
    value: String(child.props.value ?? child.props.children),
    label: child.props.children,
    disabled: child.props.disabled,
  }));
  const selected = options.find((option) => option.value === String(value));
  return (
    <Select.Root
      value={String(value ?? "") || emptyValue}
      disabled={disabled}
      name={name}
      onValueChange={(next) => {
        const value = next === emptyValue ? "" : next;
        onChange?.({ target: { value }, currentTarget: { value } });
      }}
    >
      <Select.Trigger {...props} className={`${styles.select} ${className}`}>
        <Select.Value>{selected?.label}</Select.Value>
        <Select.Icon className={styles.selectChevron}>
          <RiArrowDownSLine size={14} aria-hidden="true" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={styles.selectMenu}
          position="popper"
          sideOffset={6}
          collisionPadding={12}
        >
          <Select.ScrollUpButton className={styles.selectScroll}>
            <RiArrowUpSLine size={14} aria-hidden="true" />
          </Select.ScrollUpButton>
          <Select.Viewport className={styles.selectViewport}>
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value || emptyValue}
                disabled={option.disabled}
                className={styles.selectItem}
              >
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator className={styles.selectCheck}>
                  <RiCheckLine size={14} aria-hidden="true" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className={styles.selectScroll}>
            <RiArrowDownSLine size={14} aria-hidden="true" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
