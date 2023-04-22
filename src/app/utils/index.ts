import {DatesRange} from '../types';
export function isBetweenDates(value: Date, [after, before]: DatesRange) {
  if (after && value < after) {
    return false;
  }
  if (before && value > before) {
    return false;
  }
  return true;
}
