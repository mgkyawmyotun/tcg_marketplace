import type { FC } from 'react';
import React from 'react';
import styles from '../../styles/header.module.scss';
import LogoIcon from '../svg/LogoIcon';
interface HeaderProps {}
export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.header}>
      <h1>TCG Marketplace</h1>
      <div className={styles.header__icon}>
        <LogoIcon />
      </div>
    </div>
  );
};
