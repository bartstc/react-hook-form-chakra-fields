import * as React from 'react';
import { useEffect } from 'react';
import { get, isEmpty } from 'lodash';
import { Controller, useFormContext } from 'react-hook-form';

import { Currency, OptionType } from '../../types';
import { currencyOptions } from './Builders';
import { SelectInput, SelectInputProps } from '../../../src/Inputs/SelectInput';

interface IProps extends Omit<SelectInputProps, 'options'> {
  name: string;
  moneyName: string;
}

const CurrencySelectField = ({ name, moneyName, ...props }: IProps) => {
  const {
    watch,
    setValue,
    errors,
    clearErrors,
    formState: { touched },
  } = useFormContext();

  const currencyValue = watch(name);
  const moneyValue = watch(moneyName);
  const isInvalid =
    Boolean(get(touched, moneyName)) && Boolean(get(errors, moneyName));

  useEffect(() => {
    if (name) {
      if (isEmpty(moneyValue)) {
        setValue(name, null);
      } else {
        setValue(name, Currency.Eu);
        clearErrors(name);
      }
    }
  }, [moneyValue]);

  return (
    <Controller
      name={name}
      render={fieldProps => {
        return (
          <SelectInput
            {...props}
            options={currencyOptions}
            inputId={name}
            defaultValue={currencyOptions[0]}
            placeholder="Currency"
            isSearchable={false}
            backspaceRemovesValue={false}
            isMulti={false}
            isClearable={false}
            isInvalid={isInvalid}
            {...fieldProps}
            onChange={option => {
              setValue(name, (option as OptionType).value);
            }}
            value={
              currencyValue
                ? currencyOptions.find(option => option.value === currencyValue)
                : null
            }
          />
        );
      }}
    />
  );
};

export { CurrencySelectField };
