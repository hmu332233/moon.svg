export const THEMES = ['basic', 'shadow'] as const;
export type Theme = typeof THEMES[number];
export type CreateMoonFunc = (date: string, size: string) => Promise<string>;
export type CreateMoonFuncMap = {
  [key in Theme]: CreateMoonFunc;
};
