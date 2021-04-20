import * as React from 'react';
import { SimpleGrid, Button } from '@chakra-ui/react';
import * as dayjs from 'dayjs';
import * as yup from 'yup';

import { Form } from './Form';

import {
  InputField,
  DateField,
  DateTimeField,
  DateTimeOnlyField,
} from '../../src';

interface FormDto {
  string: string;
  date: string;
  dateTime: string;
  dateTimeOnly: string;
}

const ExampleForm = () => {
  const schema = yup.object().shape({
    dateTimeOnly: yup.string().required(),
  });

  return (
    <Form<FormDto>
      id="example-form"
      onSubmit={model => {
        console.log(model);
      }}
      schema={schema}
      defaultValues={{
        string: '',
        date: dayjs()
          .add(1, 'day')
          .hour(10)
          .minute(30)
          .toDate()
          .toString(),
        dateTime: dayjs()
          .add(1, 'day')
          .hour(10)
          .minute(30)
          .toDate()
          .toString(),
        dateTimeOnly: '',
      }}
    >
      <SimpleGrid columns={6} spacingX={4}>
        <InputField
          name="string"
          label={'Input Field'}
          id="input-field"
          colSpan={6}
        />
        <DateField
          name="date"
          label={'Date Field'}
          id="date-field"
          colSpan={6}
          minDate={dayjs().toDate()}
        />
        <DateTimeField
          name="dateTime"
          label={'Date Time Field'}
          id="date-time-field"
          colSpan={6}
        />
        <DateTimeOnlyField
          name="dateTimeOnly"
          label={'Date Time Only Field'}
          id="date-time-only-field"
          colSpan={6}
          initDate={dayjs()
            .add(2, 'day')
            .toDate()
            .toString()}
        />
      </SimpleGrid>
      <Button form="example-form" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export { ExampleForm };
