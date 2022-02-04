import React, { FC, useState } from 'react';
import styles from '../../styles/checkout.module.scss';
import CartIcon from '../svg/CartIcon';

interface CheckOutButtonProps {}
export const CheckOutButton: FC<CheckOutButtonProps> = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div
      className={styles.checkout_button}
      style={{ visibility: visible ? 'visible' : 'hidden' }}
    >
      <div className={styles.docker}>1</div>
      <CartIcon />
      View cart
    </div>
  );
};
