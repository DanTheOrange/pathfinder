import React from 'react';
import Select from 'react-select';
import races from '../../../races';

export default function ClassSelect({ setters }) {
  const options = Object.keys(races).map(race => {
    return {
      label: races[race]().name,
      value: race
    };
  });

  return (
    <Select options={options} onChange={option => setters.race(option.value)} />
  );
}
