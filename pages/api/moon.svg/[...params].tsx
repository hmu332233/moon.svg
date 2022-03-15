// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { params } = req.query;
  const [day, month, year] = params as string[];

  if (!year || !month || !day) {
    return res.status(404).send('Not Found');
  }

  const date = `${year}-${month}-${day}`;

  res.status(200).send(`
    <html>
    <head>
      <title>Moon Phase (${date})</title>
      <meta property="og:image" content="https://moon-phase.vercel.app/api/moon?date=${date}">
    </head>
    <body></body>
    </html>
  `);
}
