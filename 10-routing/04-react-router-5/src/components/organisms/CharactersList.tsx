import { VFC } from 'react';
import { Icon, Item } from 'semantic-ui-react';

import { Character } from '../../data/characters';
import Spinner from '../molecules/Spinner';

type Props = {
  characters: Character[];
  isLoading?: boolean;
};

const CharactersList: VFC<Props> = ({ characters = [], isLoading = false }) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
      <Item.Group>
        {characters.map((character) => (
          <Item key={character.id}>
            <Icon name="user circle" size="huge" />
            <Item.Content>
              <Item.Header>{character.name}</Item.Header>
              <Item.Meta>
                {character.grade}
                年生
              </Item.Meta>
              <Item.Meta>
                {character.height ?? '???'}
                cm
              </Item.Meta>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    )}
  </>
);

export default CharactersList;
