import Link from 'next/link';
import CharacterPreview from '../character-preview/CharacterPreview';
import CHARACTERS from '../../constants/characters';
import Character from '../../interfaces/character';
import styles from './characters-list.module.scss';

function CharactersList() {
  return (
    <ul className={styles.list}>
      {
      CHARACTERS.map((character: Character) => (
        <Link key={character.id} href={`quotes/${character.id}`}>
          <li><CharacterPreview character={character} /></li>
        </Link>
      ))
    }
    </ul>
  );
}

export default CharactersList;
