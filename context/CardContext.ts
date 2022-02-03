import { Card as CardType } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { createContext } from 'react';
export const CardContext = createContext<{
  intialValue: CardType[];
  filteredValue: CardType[];
  setFilteredValue: (values: CardType[]) => void;
}>({ intialValue: [], filteredValue: [], setFilteredValue: () => {} });
