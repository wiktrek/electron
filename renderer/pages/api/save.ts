import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { text } = req.body;
  fs.writeFileSync('../../../files/text.txt', text);
  res.statusCode = 200;

  res.send(JSON.stringify({ message: 'slug not found' }));
};
