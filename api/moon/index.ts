import type { VercelRequest, VercelResponse } from '@vercel/node';

import { getMoonPhases } from '../../utils/moon';
import { createMoon } from '../../utils/svg';


export default async (request: VercelRequest, response: VercelResponse) => {
  const { date } = request.query;

  const { k, isWaxing } = await getMoonPhases(date ? new Date(date as string) : undefined);
  const moonSvg = createMoon(k, isWaxing);

  response.status(200).send(moonSvg);
};