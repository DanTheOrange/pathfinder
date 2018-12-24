import { bab } from './helpers';

export default function fighter(level) {
  const levelOneFeats = [
    'Light Armour Proficiency',
    'Medium Armour Proficiency',
    'Heavy Armour Proficiency',
    'Shield Proficiency',
    'Tower Shield Proficiency',
    'Simple Weapon Proficiency',
    'Martial Weapon Proficiency'
  ];

  return {
    name: 'Fighter',
    bab: bab('fast'),
    feats: level === 1 ? levelOneFeats : [],
    bonusFeats:
      level === 1 || level % 2 === 0
        ? [
            {
              type: 'Combat Feats'
            }
          ]
        : []
  };
}
