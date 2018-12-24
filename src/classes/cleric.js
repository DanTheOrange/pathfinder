import { bab } from './helpers';

export default function fighter(level) {
  const levelOneFeats = [
    'Light Armour Proficiency',
    'Medium Armour Proficiency',
    'Shield Proficiency',
    'Simple Weapon Proficiency'
  ];

  return {
    name: 'Cleric',
    bab: bab('medium'),
    feats: level === 1 ? levelOneFeats : [],
    channelEnergy: {
      die: 6,
      quantity: (level % 2 === 0 ? 0.5 : 0) + level / 2
    }
  };
}
