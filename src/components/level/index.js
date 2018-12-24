import React from 'react';
import ClassSelect from './select/class';
import RaceSelcet from './select/race';
// Not sure if this is the right place to stack levels
// import classes from '../../classes';

export default function Level({ level, levels, className, setters }) {
  const currentLevel = levels[level - 1];

  return (
    <div className={className}>
      <h2>
        {level}: {currentLevel.charClass}
      </h2>
      <ClassSelect setters={setters} level={level} />
      {level === 1 && <RaceSelcet setters={setters} />}
    </div>
  );
}
