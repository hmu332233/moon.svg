// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import type { Theme } from 'server/theme/types';

import createMoonFuncMap from 'server/theme';
import { isTheme } from 'server/utils/type';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { date, size = '100', theme = 'basic' } = req.query;

  if (!isTheme(theme)) {
    return res.status(200).end('');
  }

  const createMoon = createMoonFuncMap[theme as Theme];
  const moonSvg = await createMoon(date as string, size as string);

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=3600, max-age=3600');
  res.status(200).end(moonSvg);
}
