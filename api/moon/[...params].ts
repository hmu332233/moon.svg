import type { VercelRequest, VercelResponse } from '@vercel/node';


export default async (request: VercelRequest, response: VercelResponse) => {
  const { params } = request.query;
  const [year, month, day] = params;

  if (!year || !month || !day) {
    return response.status(404).send('Not Found');
  }

  const date = `${year}-${month}-${day}`;

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