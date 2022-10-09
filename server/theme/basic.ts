import type { CreateMoonFunc } from './types';
import { getMoonPhases } from '../utils/moon';

const createMoon: CreateMoonFunc = async (
  date: string,
  size: string,
  rotate: string,
) => {
  const { k, isWaxing } = await getMoonPhases(
    date ? new Date(date as string) : undefined,
  );

  let percent = k * 100;

  if (percent < 1) {
    const path = `<path d="m 160 10 a 20 20 0 1 1 0 300 a 20 20 0 1 1 0 -300" style="fill: #000; stroke:black; stroke-width:2" />`;
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" viewBox="0 0 320 320">${path}</svg>`;
  }

  if (percent < 5) {
    percent = 5;
  }

  let rx1;
  let ry1;
  let flag1;
  let rx2;
  let ry2;
  let flag2;

  if (isWaxing) {
    rx1 = 20;
    ry1 = 20;
    rx2 = Math.abs(((percent - 50) / 5) * 2);
    ry2 = 20;
    flag1 = 1;
    flag2 = percent < 50 ? 0 : 1;
  } else {
    rx1 = Math.abs(((percent - 50) / 5) * 2);
    ry1 = 20;
    rx2 = 20;
    ry2 = 20;
    flag1 = percent < 50 ? 0 : 1;
    flag2 = 1;
  }

  const background =
    '<path d="m 160 10 a 20 20 0 1 1 0 300 a 20 20 0 1 1 0 -300" style="fill: #000; stroke:black; stroke-width:2" />';
  const path = `<path d="m 160 10 a ${rx1} ${ry1} 0 1 ${flag1} 0 300 a ${rx2} ${ry2} 0 1 ${flag2} 0 -300" style="fill: #FEFCD7; stroke:black; stroke-width:4" />`;

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" transform="rotate(${rotate})" viewBox="0 0 320 320">${background}${path}</svg>`;
};

// isWaxing percent < 50
// a20 / a20 -> 0 / 1 / 0
// isWaxing percent > 50
// a20 / a0 -> 20 / 1 / 1

// !isWaxing percent < 50
// a20 -> 0 / a20 / 0 / 1
// !isWaxing percent > 50
// a0 -> 20 / a20 / 1 / 1

export default createMoon;
