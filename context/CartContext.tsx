import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { createContext } from 'react';
export const CartContext = createContext<{
  cart: Card[];
  addToCart: (card: Card) => void;
  removeCardFromCart: (card_id: string) => void;
}>({
  cart: [],
  addToCart: (card: Card) => {},
  removeCardFromCart: () => {},
});
