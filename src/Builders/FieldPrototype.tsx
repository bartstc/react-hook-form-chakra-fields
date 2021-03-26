import React, { ComponentType, ReactElement, ReactNode } from 'react';
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
  UseFormMethods,
} from 'react-hook-form';
import { get } from 'lodash';

import { FieldControl, FieldControlProps } from './FieldControl';
import { GridItemProps } from '../types';

interface ReadModeProps {
  value: any;
}

export interface FieldPrototypeProps extends GridItemProps {
  name: string;
  label: ReactNode | string;
  id: string;
  required?: boolean;
  disabled?: boolean;
  tip?: ReactNode | string;
  helperText?: ReactNode;
}

interface InnerPrototypeProps {
  isInvalid: boolean;
}

interface IProps extends Omit<FieldControlProps, 'children' | 'errorText'> {
  children: (
    methods: UseFormMethods,
    controllerProps: ControllerRenderProps,
    innerProps: InnerPrototypeProps
  ) => ReactElement;
  readModeComponent?: ComponentType<ReadModeProps>;
}

const FieldPrototype = ({
  children,
  name,
  isRequired = true,
  ...props
}: IProps) => {
  const methods = useFormContext();
  const isInvalid = Boolean(get(methods.errors, name));

  return (
    <FieldControl
      errorText={get(methods.errors, name)?.message}
      isInvalid={isInvalid}
      name={name}
      isRequired={isRequired}
      {...props}
    >
      <Controller
        name={name}
        render={props => {
          return children(methods, props, { isInvalid });
        }}
      />
    </FieldControl>
  );
};

export { FieldPrototype };
