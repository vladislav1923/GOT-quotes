import React, { SyntheticEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { AxiosError } from 'axios';
import Modal from '../modal/Modal';
import { State, useStore } from '../../store/store';
import styles from './feedback.module.scss';
import Textarea from '../textarea/Textarea';
import Button from '../button/Button';
import ButtonSizesEnum from '../../enums/button-sizes.enum';
import ButtonColorsEnum from '../../enums/button-colors.enum';
import { sendFeedback } from '../../services/feedback/feedback.service';

type Props = {
  store?: State;
};

const Feedback = observer(({ store }: Props) => {
  const { isFeedback, updateFeedback, updateNotification } = useStore(store);
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const changeHandler = (data: string) => {
    setValue(data);
    setError('');
  };

  const submitHandler = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!value) {
      setError('Set the feedback field');
    }

    try {
      const response = await sendFeedback({ text: value });
      if (response.success) {
        updateFeedback(false);
        updateNotification('Feedback has been sent');
        setValue('');
      } else {
        setError(response.message as string);
      }
    } catch (httpError) {
      if (httpError instanceof AxiosError) {
        const message = httpError?.response?.data?.message;
        setError(message);
      }
    }
  };

  return (
    <div>
      {isFeedback
          && (
          <Modal close={() => updateFeedback(false)}>
            <form className={styles.form} onSubmit={submitHandler}>
              <h2 className={styles.title}>Feedback</h2>
              <div className={styles.textarea}>
                <Textarea
                  value={value}
                  label="Set feedback"
                  placeholder="Set feedback"
                  error={error}
                  change={changeHandler}
                />
              </div>
              <Button
                isSubmit
                size={ButtonSizesEnum.Medium}
                color={ButtonColorsEnum.Ice}
              >
                Submit
              </Button>
            </form>
          </Modal>
          )}
    </div>
  );
});

export default Feedback;
