import React from 'react';

import { FieldPrototype, FieldPrototypeProps } from '../Builders';
import { DateTimeOnlyInput, DateTimeOnlyInputProps } from '../Inputs';

export type DateTimeOnlyFieldProps = Omit<DateTimeOnlyInputProps, 'onChange'> &
  FieldPrototypeProps & {
    requiredFieldMessage?: string;
  };

const DateTimeOnlyField = ({
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
}: DateTimeOnlyFieldProps) => {
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
          <DateTimeOnlyInput
            {...props}
            {...fieldProps}
            id={id}
            isInvalid={isInvalid}
            onChange={(dateTimeValue, timeValue) => {
              setValue(name, timeValue ? dateTimeValue : '', {
                shouldDirty: true,
              });

              if (required && !timeValue) {
                setError(name, { message: requiredFieldMessage });
                return;
              }

              if (timeValue && timeValue.length === 5) clearErrors(name);
            }}
          />
        );
      }}
    </FieldPrototype>
  );
};

export { DateTimeOnlyField };
