import React from 'react';

import { FieldPrototype, FieldPrototypeProps } from '../Builders';
import { DateTimeInput, DateTimeInputProps } from '../Inputs';

export type DateTimeFieldProps = Omit<DateTimeInputProps, 'onChange'> &
  FieldPrototypeProps & {
    requiredFieldMessage?: string;
  };

const DateTimeField = ({
  name,
  label,
  required = true,
  disabled,
  helperText,
  id,
  tip,
  colSpan,
  colStart,
  colEnd,
  rowSpan,
  rowStart,
  rowEnd,
  requiredFieldMessage = 'Field is required',
  ...props
}: DateTimeFieldProps) => {
  return (
    <FieldPrototype
      name={name}
      isRequired={required}
      isDisabled={disabled}
      helperText={helperText}
      tip={tip}
      id={id}
      label={label}
      rowSpan={rowSpan}
      rowStart={rowStart}
      rowEnd={rowEnd}
      colSpan={colSpan}
      colStart={colStart}
      colEnd={colEnd}
    >
      {({ setValue, clearErrors, setError }, fieldProps, { isInvalid }) => {
        return (
          <DateTimeInput
            {...props}
            {...fieldProps}
            id={id}
            isInvalid={isInvalid}
            onChange={dateTimeValue => {
              setValue(name, dateTimeValue, { shouldDirty: true });
              if (required && dateTimeValue === null) {
                setError(name, { message: requiredFieldMessage });
                return;
              }

              if (dateTimeValue) clearErrors(name);
            }}
          />
        );
      }}
    </FieldPrototype>
  );
};

export { DateTimeField };
