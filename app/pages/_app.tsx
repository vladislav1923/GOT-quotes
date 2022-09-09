import '../styles/vars.css';
import '../styles/fonts.css';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import App from 'next/app';
import { ErrorInfo } from 'react';
import { setupStore } from '../store/store';
import { initialState } from '../constants/initial-state';

class MyApp extends App {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;
    const store = setupStore(initialState);
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
