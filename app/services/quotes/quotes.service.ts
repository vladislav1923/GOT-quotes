import axios from 'axios';
import Quote from '../../interfaces/quote';
import API_REQUEST_URL from '../../constants/api-request-url';

const getQuotesByQuoter = async (id: string): Promise<Quote[]> => {
  const response = await axios.get(`${API_REQUEST_URL}/author/${id}/100`);

  return response.data;
};

export { getQuotesByQuoter };
