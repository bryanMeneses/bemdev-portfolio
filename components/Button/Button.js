import Link from 'next/link'
import React from 'react'
import styles from './Button.module.css'

import { btnStyles } from './btnStyles'

export const Button = () => {
  return (
    <div></div>
  )
}

export const ButtonLink = ({children, href, className, btnStyle}) => {

  
  // const checkBtnStyle = btnStyles.includes(btnStyle) ? btnStyle : btnStyles[0]

  return (
    <Link passHref href={href} >
      <a className={`${styles.btn} ${styles[btnStyle]} ${className}`}>
      {children}
      </a>
      
    </Link>
  )
}