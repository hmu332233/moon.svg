import { getMoonPhases } from "./utils/moon";
import { createMoon } from "./utils/svg";

(async () => {
  for (let i = 1 ; i <= 31 ; i++) {
    const { k, isWaxing } = await getMoonPhases(new Date(`2022-03-${i}`));
    const moonSvg = createMoon(k, isWaxing);  
    console.log(moonSvg)
  }
})();




