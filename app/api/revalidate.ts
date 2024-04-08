import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    // Make a request to the page's endpoint to trigger revalidation
    const response = await fetch('/', {
      method: 'POST', // or 'GET' depending on your page endpoint
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}), // You can pass any necessary data here
    })

    if (!response.ok) {
      // Handle non-200 responses here
      throw new Error('Failed to trigger revalidation')
    }

    return res.json({ revalidated: true })
  } catch (err) {
    console.error('Error revalidating:', err)
    return res.status(500).json({ error: 'Error revalidating' })
  }
}
