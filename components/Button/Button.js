import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";
import { Link as ScrollLink } from "react-scroll";

export const Button = ({ children, type = "button", className, btnStyle }) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[btnStyle]} ${className}`}
    >
      {children}
    </button>
  );
};

export const ButtonLink = ({
  children,
  href,
  className,
  btnStyle,
  ...props
}) => {
  return (
    <a
      href={href}
      className={`${styles.btn} ${styles[btnStyle]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export const ButtonScrollLink = ({ children, to, className, btnStyle }) => {
  return (
    <ScrollLink
      smooth={true}
      offset={-78}
      to={to}
      className={`${styles.btn} ${styles[btnStyle]} ${className}`}
    >
      {children}
    </ScrollLink>
  );
};
