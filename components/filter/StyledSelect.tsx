import { useField, useFormikContext } from 'formik';
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
function toOptions(options: any) {
  return options.map((value: any) => ({ value, label: value as string }));
}

interface StyledSelectProps {
  options: any;
  placeholder: string;
}
export const StyledSelect: FC<StyledSelectProps> = ({
  options,
  placeholder,
}) => {
  const [{ value }, _, { setValue }] = useField({
    name: placeholder.toLowerCase(),
  });
  const { submitForm } = useFormikContext();
  return (
    <Select
      options={toOptions(options)}
      styles={customStyles}
      placeholder={placeholder}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        submitForm();
      }}
    />
  );
};
