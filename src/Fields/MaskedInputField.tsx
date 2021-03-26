import React from 'react';
import { useFormContext } from 'react-hook-form';

import { InputField, InputFieldProps } from './InputField';
import { MaskedInput, MaskedInputProps } from '../Inputs';
import { GridItemProps } from '../types';

export type MaskedInputFieldProps = InputFieldProps & MaskedInputProps & GridItemProps;

const MaskedInputField = ({ name, ...props }: MaskedInputFieldProps) => {
  const { watch } = useFormContext();

  return (
    <InputField
      as={MaskedInput}
      name={name}
      value={watch(name)}
      guide
      {...props}
    />
  );
};

export { MaskedInputField };
