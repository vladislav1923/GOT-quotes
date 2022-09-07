import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styles from './notification.module.scss';
import { State, useStore } from '../../store/store';

type Props = {
  store?: State;
};

const Notification = observer(({ store }: Props) => {
  const { notification, updateNotification } = useStore(store);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (notification) {
      timeout = setTimeout(() => updateNotification(''), 5000);
    }
    return function onDestroy() {
      if (timeout) {
        clearInterval(timeout);
      }
    };
  }, [notification, updateNotification]);

  return (
    <div>
      {
              notification && (
              <div className={styles.notification}>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={() => updateNotification('')}
                >
                  &#x2b;
                </button>
                  { notification }
              </div>
              )
          }
    </div>
  );
});

export default Notification;
