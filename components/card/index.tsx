import { Card as CardType } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import React, { FC, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from '../../styles/card.module.scss';

interface CardProps {
  card: CardType;
}
export const Card: FC<CardProps> = ({ card }) => {
  const [select, setSelect] = useState(false);
  const { addToCart, removeCardFromCart } = useContext(CartContext);
  useEffect(() => {
    if (select) {
      addToCart(card);
      return;
    }
    removeCardFromCart(card.id);
  }, [select]);

  return (
    <div className={styles.card}>
      <img src={card.images.large} alt="" className={styles.card__image} />
      <div className={styles.card__name}>{card.name}</div>
      <div className={styles.card__rarity}>{card.rarity}</div>
      <div className={styles.card__row_one}>
        <div className={styles.card__price}>
          ${(card as any).cardmarket.prices.averageSellPrice}
        </div>
        <div className={styles.card__stock}>{card.set.total} left</div>
      </div>
      <div
        className={` ${select ? styles.card__selected : styles.card__select}`}
        onClick={() => {
          setSelect((v) => !v);
        }}
      >
        {select ? 'Selected' : 'Select card'}
      </div>
    </div>
  );
};
