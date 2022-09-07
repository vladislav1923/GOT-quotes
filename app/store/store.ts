import { useMemo } from 'react';
import {
  applySnapshot, Instance, types,
} from 'mobx-state-tree';
import { Theme } from 'react-toggle-theme';

let store: State | undefined;

const Store = types
  .model({
    theme: Theme.LIGHT,
    isFeedback: false,
  })
  .actions((self) => {
    const updateTheme = (theme: Theme) => {
      // eslint-disable-next-line no-param-reassign
      self.theme = theme;
    };
    const updateFeedback = (state: boolean) => {
      // eslint-disable-next-line no-param-reassign
      self.isFeedback = state;
    };
    return { updateTheme, updateFeedback };
  });

export type State = Instance<typeof Store>;

export function initializeStore(snapshot = null) {
  // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
  const _store = store ?? Store.create({ theme: Theme.LIGHT, isFeedback: false });

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return store;
}

export function useStore(initialState: any) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
