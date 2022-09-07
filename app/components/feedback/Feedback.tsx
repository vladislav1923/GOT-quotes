import React from 'react';
import { observer } from 'mobx-react-lite';
import Modal from '../modal/Modal';
import { State, useStore } from '../../store/store';

type Props = {
  store?: State;
};

const Feedback = observer(({ store }: Props) => {
  const { isFeedback, updateFeedback } = useStore(store);

  return (
    <div>
      {isFeedback && <Modal close={() => updateFeedback(false)}><div>Heeloo thehess</div></Modal>}
    </div>
  );
});

export default Feedback;
