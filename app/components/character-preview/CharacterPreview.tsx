import Image from 'next/image';
import { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import styles from './character-preview.module.scss';
import Character from '../../interfaces/character';

type Props = {
  character: Character;
};

export default function CharacterPreview({ character }: Props) {
  const router = useRouter();
  const clickHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(character.fandomUrl);
  };

  return (
    <div className={styles.container}>
      <Image src={character.image} alt={character.name} width={180} height={280} />
      <div className={styles.layer}>
        <p className={styles.name}>{ character.name }</p>
        <a
          href={character.fandomUrl}
          className={styles.link}
          target="_blank"
          onClick={clickHandler}
          rel="noreferrer"
        >
          Who is it?
        </a>
      </div>
    </div>
  );
}
