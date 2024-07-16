// pages/api/submit.js
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const data = req.body;

  // Process the data (e.g., save to a database, send an email, etc.)
  // For example, to log the data:
  console.log('Received application:', data);

  res.status(200).json({ message: 'Başvurunuz alındı, Teşekkürler' });
}
