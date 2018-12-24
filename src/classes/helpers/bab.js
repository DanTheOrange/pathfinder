export default function bab(progression) {
  switch (progression) {
    case 'fast':
      return 1;
    case 'medum':
      return 0.75;
    case 'slow':
    default:
      return 0.5;
  }
}
