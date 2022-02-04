import { NextApiRequest, NextApiResponse } from 'next';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check given query is number or throw error
  try {
    if (isNaN(+req.query.p)) {
      throw new Error();
    }
  } catch (error) {
    res.status(400).json({ error: 'Cannot parse query p must be number' });
    return;
  }
  try {
    const cards = await PokemonTCG.findCardsByQueries({
      page: parseInt(req.query.p + ''),
      pageSize: 12,
    });
    res.status(200).json(cards);
    return;
  } catch (error) {
    res.status(400).json({ error });
  }
}
