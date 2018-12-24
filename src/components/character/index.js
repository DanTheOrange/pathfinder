import React from 'react';
import Level from '../level';

export default function Levels({ levels, className, setters }) {
  return (
    <main className={`main-${className}`}>
      {levels.map((level, i) => (
        <Level
          key={i}
          className={className}
          level={i + 1}
          levels={levels}
          setters={setters}
        />
      ))}
    </main>
  );
}
