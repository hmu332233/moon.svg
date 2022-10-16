import { Resvg } from '@resvg/resvg-js';

const opts = {
  fitTo: {
    mode: 'width',
    value: 250,
  },
} as const;

export const renderPng = (moonSvg: string) => {
  const resvg = new Resvg(moonSvg, opts);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  return pngBuffer;
};
