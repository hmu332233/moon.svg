export const createMoon = (k: number, isWaxing: boolean) => {
  let percent = k * 100;

  if (percent < 1) {
    const path = `<path d="m 160 10 a 20 20 0 1 1 0 300 a 20 20 0 1 1 0 -300" style="fill: #000; stroke:black; stroke-width:2" />`
    return `<svg width="100px" height="100px" viewBox="0 0 320 320">${path}</svg>`;
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
    rx2 = Math.abs((percent - 50) / 5 * 2);
    ry2 =  20;
    flag1 = 1;
    flag2 = percent < 50 ? 0 : 1;
  } else {
    rx1 = Math.abs((percent - 50) / 5 * 2);
    ry1 = 20;
    rx2 = 20;
    ry2 =  20;
    flag1 = percent < 50 ? 0 : 1;
    flag2 = 1;
  }

  const path = `<path d="m 160 10 a ${rx1} ${ry1} 0 1 ${flag1} 0 300 a ${rx2} ${ry2} 0 1 ${flag2} 0 -300" style="fill: #FEFCD7; stroke:black; stroke-width:8" />`;
  return `<svg width="100px" height="100px" viewBox="0 0 320 320">${path}</svg>`;
};

// isWaxing percent < 50
// a20 / a20 -> 0 / 1 / 0
// isWaxing percent > 50
// a20 / a0 -> 20 / 1 / 1

// !isWaxing percent < 50
// a20 -> 0 / a20 / 0 / 1
// !isWaxing percent > 50
// a0 -> 20 / a20 / 1 / 1