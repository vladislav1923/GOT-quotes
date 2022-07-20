import Image from 'next/image';
import styles from './character-preview.module.css';
import Character from '../../interfaces/Character';

type Props = {
  character: Character;
};

export default function CharacterPreview({ character }: Props) {
  return (
    <div className={styles.container}>
      <Image src={character.image} alt={character.name} width={180} height={280} />
      <div className={styles.layer}>
        <p className={styles.name}>{ character.name }</p>
        <a href={character.fandomUrl} className={styles.link} target="_blank" rel="noreferrer">Who is it?</a>
      </div>
    </div>
  );
}
