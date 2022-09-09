import { Theme } from 'react-toggle-theme';
import { State } from '../interfaces/state';

export const initialState: State = {
  theme: Theme.LIGHT,
  isFeedback: false,
  notification: null,
};
