import { observer } from 'mobx-react-lite';
import { State, useStore } from '../../store/store';
import CharacterPreview from '../character-preview/CharacterPreview';
import Characters from '../../constants/characters';
import Character from '../../interfaces/Character';
import styles from './characters-list.module.css';

type Props = {
  store?: State;
};

const CharactersList = observer(({ store }: Props) => {
  const { theme, update } = useStore(store);
  console.log(theme, update);

  return (
    <ul className={styles.list}>
      {
        Characters.map((character: Character) => (
          <li key={character.id}><CharacterPreview character={character} /></li>
        ))
      }
    </ul>
  );
});

export default CharactersList;
