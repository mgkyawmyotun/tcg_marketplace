import type { FC } from 'react';
import React from 'react';
import styles from '../../styles/checkout.module.scss';
interface CheckOutProps {}
export const CheckOut: FC<CheckOutProps> = () => {
  return (
    <div className={styles.content}>
      <div className={styles.cart__list}></div>
    </div>
  );
};
