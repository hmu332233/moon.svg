import {createTimeOfInterest} from 'astronomy-bundle/time';
import {createMoon} from 'astronomy-bundle/moon';

export const getMoonPhases = async (date: Date = new Date()) => {
  const toi = createTimeOfInterest.fromDate(date);
  const moon = createMoon(toi);
  
  const k = await moon.getIlluminatedFraction();
  const isWaxing = await moon.isWaxing();
  
  return { k, isWaxing };
}