import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              unit_amount: 1000,
              product_data: {
                name: 'Donation',
                description:
                  'Please note this is a donation*. It is not required to download the preset packs. They are free for the photography and Ricoh GR community. Cancel if you do not wish donate.',
              },
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/thank-you`,
        cancel_url: `${req.headers.origin}/presets/?canceled=true`,
        automatic_tax: { enabled: true },
      });
      res.redirect(303, session.url!);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
