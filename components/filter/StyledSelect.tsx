import type { FC } from 'react';
import React from 'react';
import Select, { StylesConfig } from 'react-select';
const customStyles: StylesConfig = {
  control: (provided, props) => {
    return { ...provided, borderRadius: '100px', color: 'hsla(0, 1%, 74%, 1)' };
  },
  placeholder: (provided) => {
    return { ...provided, color: 'hsla(0, 1%, 74%, 1)' };
  },
};

interface StyledSelectProps {
  options: any;
  placeholder: string;
}
export const StyledSelect: FC<StyledSelectProps> = ({
  options,
  placeholder,
}) => {
  return (
    <Select options={options} styles={customStyles} placeholder={placeholder} />
  );
};
