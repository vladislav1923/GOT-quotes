import { Theme } from 'react-toggle-theme';
import Layout from './Layout';
import styles from './layout.module.css';
import { renderWithProviders } from '../../helpers/testing/testing';
import { State } from '../../interfaces/state';

describe('Layout', () => {
  it('should set dark theme', () => {
    const state: State = { theme: Theme.DARK, isFeedback: false, notification: null };

    const { container } = renderWithProviders(<Layout>{}</Layout>, {
      preloadedState: state,
    });

    const containerElement = container.getElementsByClassName(styles.container)[0];

    expect(containerElement).toHaveClass(styles.darkTheme);
  });

  it('should set light theme', () => {
    const state: State = { theme: Theme.LIGHT, isFeedback: false, notification: null };

    const { container } = renderWithProviders(<Layout>{}</Layout>, {
      preloadedState: state,
    });

    const containerElement = container.getElementsByClassName(styles.container)[0];

    expect(containerElement).toHaveClass(styles.lightTheme);
  });
});
