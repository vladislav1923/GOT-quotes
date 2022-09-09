import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './notification.module.scss';
import { updateNotification } from '../../store/store';
import { State } from '../../interfaces/state';

function Notification() {
  const notification = useAppSelector((state: State) => state.notification);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (notification) {
      timeout = setTimeout(() => dispatch(updateNotification('')), 5000);
    }
    return function onDestroy() {
      if (timeout) {
        clearInterval(timeout);
      }
    };
  }, [dispatch, notification]);

  return (
    <div>
      {
              notification && (
              <div className={styles.notification}>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={() => dispatch(updateNotification(''))}
                >
                  &#x2b;
                </button>
                  { notification }
              </div>
              )
          }
    </div>
  );
}

export default Notification;
