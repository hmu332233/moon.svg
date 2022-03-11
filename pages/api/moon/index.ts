// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { getMoonPhases } from '../../../server/utils/moon';
import { createMoon } from '../../../server/utils/svg';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { date } = req.query;

  const { k, isWaxing } = await getMoonPhases(date ? new Date(date as string) : undefined);
  const moonSvg = createMoon(k, isWaxing);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  // res.setHeader(
  //   "Cache-Control",
  //   "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
  // );

  res.end(moonSvg);
}
