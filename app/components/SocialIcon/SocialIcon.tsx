import React, { FC } from 'react';
import styles from './SocialIcon.module.css';
import {
  FaXTwitter,
  FaInstagram,
  FaDev,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa6';
import { IconType } from 'react-icons';

interface SocialIconProps {
  iconName: 'x' | 'instagram' | 'dev' | 'github' | 'linkedin';
}

const SocialIcon: FC<SocialIconProps> = ({ iconName }) => {
  let Icon: IconType;

  switch (iconName) {
    case 'x':
      Icon = FaXTwitter;
      break;
    case 'dev':
      Icon = FaDev;
      break;
    case 'github':
      Icon = FaGithub;
      break;
    case 'instagram':
      Icon = FaInstagram;
      break;
    case 'linkedin':
      Icon = FaLinkedin;
      break;
  }

  return (
    <div className={styles.SocialIcon}>
      <Icon className={styles.Icon} />
    </div>
  );
};

export default SocialIcon;
