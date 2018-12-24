import React from 'react';
import Select from 'react-select';
import classes from '../../../classes';

export default function ClassSelect({ setters, level }) {
  const options = Object.keys(classes).map(charClass => {
    return {
      label: classes[charClass]().name,
      value: charClass
    };
  });

  return (
    <Select
      options={options}
      onChange={option => {
        const defaultVal = level === 1 ? 20 : 1;
        let levels = [];
        let quantity = Number(window.prompt('How many levels?', defaultVal));

        if (quantity < 1) quantity = 1;
        if (quantity > 20 - (level - 1)) quantity = 20 - (level - 1);

        let i = quantity - 1;

        while (i >= 0) {
          levels.push(level + i);
          i--;
        }

        setters.class(option.value, levels);
      }}
    />
  );
}
