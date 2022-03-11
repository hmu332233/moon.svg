import type { VercelRequest, VercelResponse } from '@vercel/node';


export default async (request: VercelRequest, response: VercelResponse) => {
  const { date = '' } = request.query;

  response.status(200).send(`
    <html>
    <head>
      <title>${date} 달 위상</title>
      <meta property="og:image" content="https://svg-moon.vercel.app/api/moon?date=${date}">
    </head>
    <body></body>
    </html>
  `);
};