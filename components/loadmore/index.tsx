import React, { FC, useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import styles from '../../styles/loadmore.module.scss';
import LoadMoreIcon from '../svg/LoadMoreIcon';

interface LoadMoreProps {}
export const LoadMore: FC<LoadMoreProps> = () => {
  const { loadMore } = useContext(CardContext);
  return (
    <div
      className={styles.load_more}
      onClick={() => {
        loadMore();
      }}
    >
      <LoadMoreIcon />
      show more
    </div>
  );
};
