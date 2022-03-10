import { getMoonPhases } from "./utils/moon";

(async () => {
  const { k, isWaxing } = await getMoonPhases();
  console.log(k, isWaxing); // waxing 점점 커짐

  // isWaxing = true 일때
  const halfDown = k < 0.5;
  const number = halfDown ? 1 : 0;

  console.log('halfDown', halfDown)
  console.log('number', number);
  const percent = Math.abs(1 - k);
  console.log(percent);
  const line = (percent * 20).toFixed(3);
  console.log(line);

  const path = `<path d="m160,10 a${line},20 0 1,${number} 0,300 a20,20 0 1,0 0,-300" style="fill: #FEFCD7; stroke:black; stroke-width:8" />`;

  console.log(path);

  // isWaxing = false 일때



  // <svg width="400px" height="400px" viewBox="0 0 600 600"> // wrapper
  console.log(`<svg width="100px" height="100px" viewBox="0 0 320 320">${path}</svg>`);
})();




