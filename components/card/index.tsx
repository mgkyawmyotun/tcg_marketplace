import { Card as CardType } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import type { FC } from 'react';
import React from 'react';
import styles from '../../styles/card.module.scss';

interface CardProps {
  card: CardType;
}
export const Card: FC<CardProps> = ({ card }) => {
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
      <div className={styles.card__select}>Select card</div>
    </div>
  );
};
