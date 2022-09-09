import { render } from '@testing-library/react';
import { Theme } from 'react-toggle-theme';
import Layout from './Layout';
import styles from './layout.module.css';
import { State } from '../../interfaces/state';

describe('Layout', () => {
  // it('should set dark theme', () => {
  //   const store = { theme: Theme.DARK } as State;
  //   const { container } = render(<Layout store={store}>{}</Layout>);
  //
  //   const containerElement = container.getElementsByClassName(styles.container)[0];
  //
  //   expect(containerElement).toHaveClass(styles.darkTheme);
  // });
  //
  // it('should set light theme', () => {
  //   const store = { theme: Theme.LIGHT } as State;
  //   const { container } = render(<Layout store={store}>{}</Layout>);
  //
  //   const containerElement = container.getElementsByClassName(styles.container)[0];
  //
  //   expect(containerElement).toHaveClass(styles.lightTheme);
  // });
});
