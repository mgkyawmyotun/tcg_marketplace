import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { createContext } from 'react';
export const CartContext = createContext<{
  cart: Card[];
  addToCart: (card: Card) => void;
}>({
  cart: [],
  addToCart: (card: Card) => {},
});
