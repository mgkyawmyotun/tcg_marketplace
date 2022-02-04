import { Card as CardType } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { createContext } from 'react';
export const CardContext = createContext<{
  intialValue: CardType[];
  filteredValue: CardType[];
  setFilteredValue: (values: CardType[]) => void;
  pageNumber: number;
  loadMore: () => void;
}>({
  intialValue: [],
  filteredValue: [],
  setFilteredValue: () => {},
  pageNumber: 1,
  loadMore: () => {},
});
