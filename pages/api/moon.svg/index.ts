// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { getMoonPhases } from '../../../server/utils/moon';
import { createMoon } from '../../../server/utils/svg';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { date, size = '100' } = req.query;

  const { k, isWaxing } = await getMoonPhases(date ? new Date(date as string) : undefined);
  const moonSvg = createMoon(k, isWaxing, size as string);

  res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Content-Type", "image/svg+xml;");
  // res.setHeader("Content-Length", moonSvg.length);
  // res.setHeader(
  //   "Cache-Control",
  //   "public, immutable, no-transform, s-maxage=31536000, max-age=31536000"
  // );

  res.end(moonSvg);
}
