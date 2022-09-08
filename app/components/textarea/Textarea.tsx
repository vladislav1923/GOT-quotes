import { SyntheticEvent, useEffect, useRef } from 'react';
import styles from './textarea.module.scss';
import { generateId } from '../../helpers/generate-id/generate-id';

type Props = {
  value: string;
  label: string;
  placeholder: string;
  change: (value: string) => void;
  error?: string;
};

function Textarea({
  value, label, placeholder, change, error,
}: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const id = generateId();

  useEffect(() => {
    if (ref?.current) {
      ref.current.focus();
    }
  }, []);

  const changeHandler = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    change(e.currentTarget.value);
  };

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>{ label }</label>
      <textarea
        id={id}
        className={styles.textarea}
        ref={ref}
        value={value}
        placeholder={placeholder}
        onChange={changeHandler}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Textarea;
