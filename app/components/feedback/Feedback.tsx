import React, { SyntheticEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Modal from '../modal/Modal';
import { State, useStore } from '../../store/store';
import styles from './feedback.module.scss';
import Textarea from '../textarea/Textarea';
import Button from '../button/Button';
import ButtonSizesEnum from '../../enums/button-sizes.enum';
import ButtonColorsEnum from '../../enums/button-colors.enum';

type Props = {
  store?: State;
};

const Feedback = observer(({ store }: Props) => {
  const { isFeedback, updateFeedback } = useStore(store);
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const changeHandler = (data: string) => {
    setValue(data);
    setError('');
  };

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!value) {
      setError('Set the feedback field');
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
