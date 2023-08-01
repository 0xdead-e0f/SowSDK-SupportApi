import { NextApiResponse, NextApiRequest } from 'next'
import extensionData from '../../extension-data.json'
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json(extensionData)
}
