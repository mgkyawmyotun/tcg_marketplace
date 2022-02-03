import type { FC } from 'react';
import React from 'react';
import styles from '../../styles/filter.module.scss';
import { StyledSelect } from './StyledSelect';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
interface FilterProps {}
export const Filter: FC<FilterProps> = () => {
  return (
    <div className={styles.filter}>
      <input type="text" placeholder="Name.." />
      <div className={styles.filter__select}>
        <StyledSelect options={options} />
        <StyledSelect options={options} />
        <StyledSelect options={options} />
      </div>
    </div>
  );
};
