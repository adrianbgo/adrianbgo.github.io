import React, { FC } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  href: string;
}

const Button: FC<ButtonProps> = ({ text, href }) => (
  <a className={styles.Button} href={href}>
    {text}
  </a>
);

export default Button;
