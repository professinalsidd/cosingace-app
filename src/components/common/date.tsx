/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import ButtonComp from './Button';
import {COLORS} from '../../themes/theme';

type DateCompProps = {
  mode?: 'date' | 'time' | 'datetime';
  date: Date;
  setDate: (date: Date) => void;
  label?: string;
  title: string;
};

const DateComp: React.FC<DateCompProps> = ({
  mode = 'date',
  date,
  setDate,
  label = 'Select Date',
  title,
}) => {
  const [open, setOpen] = useState(false);
  const formattedValue =
    mode === 'time' ? date.toLocaleTimeString() : date.toDateString();
  return (
    <Fragment>
      <ButtonComp
        title={title ? title && `${title}${formattedValue}` : label}
        onPress={() => setOpen(true)}
        containerStyle={{
          backgroundColor: COLORS.WHITE,
          alignItems: 'flex-start',
          paddingHorizontal: '2%',
        }}
        style={{color: COLORS.DIM_MEDIUM}}
      />
      <DatePicker
        modal
        mode={mode}
        open={open}
        date={date}
        onConfirm={selectedDate => {
          setOpen(false);
          setDate(selectedDate);
        }}
        onCancel={() => setOpen(false)}
      />
    </Fragment>
  );
};

export default DateComp;
