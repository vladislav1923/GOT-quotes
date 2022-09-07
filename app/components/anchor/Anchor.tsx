import styles from './anchor.module.scss';

type Props = {
  url?: string;
  text: string;
  click?: () => void;
};

function Anchor({ text, url, click }: Props) {
  return (
    <>
      { !url && <button type="button" className={styles.fakeLink} onClick={click}>{ text }</button> }
      { url && <a href={url} className={styles.link} target="_blank" rel="noreferrer">{ text }</a> }
    </>
  );
}

export default Anchor;
