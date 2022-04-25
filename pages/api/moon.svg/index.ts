// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { getMoonPhases } from '../../../server/utils/moon';
import { createMoon } from '../../../server/utils/svg';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { date, size = '100', round, shadow } = req.query;

  const { k, isWaxing } = await getMoonPhases(
    date ? new Date(date as string) : undefined,
  );
  const moonSvg = createMoon(k, isWaxing, size as string, !!round, !!shadow);

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=3600, max-age=3600');

  res.status(200).end(moonSvg);
}
