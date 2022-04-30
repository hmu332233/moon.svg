type Theme = 'basic';
// type Theme = 'basic' | 'shadow';

type CreateMoonFunc = (
  k: number,
  isWaxing: boolean,
  size: string,
  round: boolean,
) => string;

type CreateMoonFuncMap = {
  [key in Theme]: CreateMoonFunc;
};
