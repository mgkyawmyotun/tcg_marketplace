import { Formik } from 'formik';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import React, { FC, useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import styles from '../../styles/filter.module.scss';
import { StyledSelect } from './StyledSelect';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

interface FilterProps {
  sets: string[];
  types: PokemonTCG.Type[];
  rarities: PokemonTCG.Rarity[];
}
export const Filter: FC<FilterProps> = ({ sets, types, rarities }) => {
  const { intialValue, setFilteredValue } = useContext(CardContext);
  return (
    <div className={styles.filter}>
      <Formik
        initialValues={{
          name: '',
          type: undefined,
          rarity: undefined,
          set: undefined,
        }}
        onSubmit={(values) => {
          const filteredValue = intialValue
            .filter((data) =>
              data.name.toLowerCase().includes(values.name.toLowerCase())
            )
            .filter((data) =>
              values.rarity
                ? data.rarity === (values.rarity as any).value
                : true
            )
            .filter((data) => {
              if (values.type) {
                if (data.types?.indexOf((values.type as any).value) !== -1) {
                  return true;
                } else {
                  return false;
                }
              }
              return true;
            })
            .filter((data) => {
              if (values.set) {
                if (data.set.name == (values.set as any).value) {
                  return true;
                }
                return false;
              }
              return true;
            });
          setFilteredValue(filteredValue);
        }}
      >
        {({ values, handleSubmit, setValues }) => {
          return (
            <>
              <input
                type="text"
                placeholder="Name.."
                value={values.name}
                onChange={(e) => {
                  setValues((values) => ({ ...values, name: e.target.value }));
                  handleSubmit();
                }}
              />
              <div className={styles.filter__select}>
                <StyledSelect options={types} placeholder="Type" />
                <StyledSelect options={rarities} placeholder="Rarity" />
                <StyledSelect options={sets} placeholder="Set" />
              </div>
            </>
          );
        }}
      </Formik>
    </div>
  );
};
