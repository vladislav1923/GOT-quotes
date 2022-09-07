import axios from 'axios';
import FeedbackResponse from '../../interfaces/feedback-response';
import FeedbackRequest from '../../interfaces/feedback-request';

const sendFeedback = async (data: FeedbackRequest): Promise<FeedbackResponse> => {
  const response = await axios.post('/api/feedback', { data: JSON.stringify(data) });

  return response.data;
};

export { sendFeedback };
