import type { NextApiRequest, NextApiResponse } from 'next';
import FeedbackRequest from '../../interfaces/feedback-request';
import FeedbackResponse from '../../interfaces/feedback-response';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FeedbackResponse>,
) {
  if (req.method === 'POST') {
    const feedback = JSON.parse(req.body.data) as FeedbackRequest;
    const result = feedback.text.length % 2 === 0;
    if (result) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({
        success: false,
        message: 'Unfortunately, we only accept text with an even number of characters :(',
      });
    }
  }

  res.status(500).json({ success: false, message: 'We are shocked too' });
}
