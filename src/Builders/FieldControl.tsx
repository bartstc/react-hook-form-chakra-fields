import React, { ReactNode } from 'react';
import {
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  FormControl,
  FormControlProps,
  HStack,
  useColorModeValue,
  GridItem,
  Tooltip,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

import { GridItemProps } from '../types';

export interface FieldControlProps
  extends Omit<FormControlProps, 'helperText' | 'errorText' | 'id' | 'label'>,
    GridItemProps {
  name: string;
  id: string;
  label?: ReactNode | string;
  helperText?: ReactNode | string;
  errorText?: ReactNode | string;
  tip?: ReactNode | string;
}

const FieldControl = ({
  errorText,
  helperText,
  label,
  children,
  tip,
  id,
  isRequired,
  ...props
}: FieldControlProps) => {
  const infoIconColor = useColorModeValue('blue.500', 'blue.200');

  return (
    <FormControl
      as={GridItem}
      mb={4}
      id={id}
      data-testid={id}
      isRequired={isRequired}
      {...props}
    >
      <HStack spacing={0}>
        {label && (
          <FormLabel
            mr="5px"
            lineHeight={'auto'}
            fontSize={'md'}
            color={'auto'}
          >
            {label}
          </FormLabel>
        )}
        {tip && (
          <Tooltip textAlign="center" label={tip}>
            <InfoIcon mb="5px" w="13px" h="13px" color={infoIconColor} />
          </Tooltip>
        )}
      </HStack>
      {children}
      <FormErrorMessage lineHeight="1rem">{errorText}</FormErrorMessage>
      <FormHelperText lineHeight="1rem">{helperText}</FormHelperText>
    </FormControl>
  );
};

export { FieldControl };
