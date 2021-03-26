import React from 'react';

import { FieldPrototype, FieldPrototypeProps } from '../Builders';
import { DateInput, DateInputProps } from '../Inputs';

export type DateFieldProps = Omit<DateInputProps, 'onChange'> &
  FieldPrototypeProps;

const DateField = ({
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
  ...props
}: DateFieldProps) => {
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
      {(_, fieldProps, { isInvalid }) => {
        return (
          <DateInput isInvalid={isInvalid} id={id} {...props} {...fieldProps} />
        );
      }}
    </FieldPrototype>
  );
};

export { DateField };
