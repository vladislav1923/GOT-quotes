import React, { SyntheticEvent, useState } from 'react';
import { AxiosError } from 'axios';
import Modal from '../modal/Modal';
import styles from './feedback.module.scss';
import Textarea from '../textarea/Textarea';
import Button from '../button/Button';
import ButtonSizesEnum from '../../enums/button-sizes.enum';
import ButtonColorsEnum from '../../enums/button-colors.enum';
import { sendFeedback } from '../../services/feedback/feedback.service';
import { updateFeedback, updateNotification } from '../../store/store';
import { State } from '../../interfaces/state';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

function Feedback() {
  const isFeedback = useAppSelector((state: State) => state.isFeedback);
  const dispatch = useAppDispatch();
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
        dispatch(updateFeedback(false));
        dispatch(updateNotification('Feedback has been sent'));
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
          <Modal close={() => dispatch(updateFeedback(false))}>
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
}

export default Feedback;
