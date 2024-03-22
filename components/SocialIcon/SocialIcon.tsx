import React, { FC } from 'react';
import styles from './SocialIcon.module.css';

interface SocialIconProps {}

const SocialIcon: FC<SocialIconProps> = () => (
  <div className={styles.SocialIcon}>SocialIcon Component</div>
);

export default SocialIcon;
