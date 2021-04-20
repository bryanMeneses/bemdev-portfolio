import Link from 'next/link'
import React from 'react'
import styles from './Button.module.css'

import { btnStyles } from './btnStyles'

export const Button = ({children, type = "button", className, btnStyle}) => {
  return (
    <button type={type} className={`${styles.btn} ${styles[btnStyle]} ${className}`}>
      {children}
    </button>
  )
}

export const ButtonLink = ({children, href, className, btnStyle}) => {
  return (
    <Link passHref href={href} >
      <a className={`${styles.btn} ${styles[btnStyle]} ${className}`}>
      {children}
      </a>
    </Link>
  )
}