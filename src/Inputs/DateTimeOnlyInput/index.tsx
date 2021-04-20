import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { isEmpty } from 'lodash';
import { Box } from '@chakra-ui/react';

import { TimeInput, TimeInputProps } from '../TimeInput';

export type DateTimeOnlyInputProps = Omit<
  TimeInputProps,
  'onChange' | 'value'
> & {
  onChange?: (date: string, time: string) => void;
  value?: string | null;
  initDate?: string;
};

const DateTimeOnlyInput = ({
  id,
  initDate = dayjs()
    .hour(0)
    .minute(0)
    .toString(),
  value = null,
  onChange,
  ...props
}: DateTimeOnlyInputProps) => {
  const insertTimeToDate = (date: string, time: string) => {
    const [hour, minute] = time.split(':');
    return dayjs(date)
      .hour(Number(hour))
      .minute(Number(minute))
      .format('YYYY-MM-DDTHH:mm:ssZ');
  };

  const [dateTimeValue, setDateTimeValue] = useState<string>(
    value ? value : initDate
  );
  const [timeValue, setTimeValue] = useState<string | null>(
    value ? dayjs(value).format('HH:mm') : null
  );

  useEffect(() => {
    if (onChange) {
      if (timeValue === null) {
        return;
      }

      if (timeValue === '') {
        onChange(dateTimeValue, '');
        return;
      }

      onChange(insertTimeToDate(dateTimeValue, timeValue), timeValue);
    }
  }, [timeValue]);

  const removeTime = () => {
    setTimeValue('');
    setDateTimeValue(
      dayjs(dateTimeValue)
        .hour(0)
        .minute(0)
        .second(0)
        .format('YYYY-MM-DDTHH:mm:ssZ')
        .toString()
    );
  };

  const insertTime = (time: string) => {
    setTimeValue(time);
    setDateTimeValue(insertTimeToDate(dateTimeValue, time));
  };

  return (
    <Box>
      <TimeInput
        id={id}
        value={value ? timeValue! : undefined}
        onChangeTime={time =>
          isEmpty(time) ? removeTime() : insertTime(time!)
        }
        {...props}
      />
    </Box>
  );
};

export { DateTimeOnlyInput };
