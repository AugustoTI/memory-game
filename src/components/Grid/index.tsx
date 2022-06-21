import { useRef, useState } from 'react';
import { CardProps } from '../../Types/cardProps';
import { GridProps } from '../../Types/GridProps';
import { duplicateRegenerateSortArray } from '../../utils/card-utils';
import { Card } from '../Card';
import * as S from './styles';

export const Grid = ({ cards }: GridProps) => {
  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(cards);
  });
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const first = useRef<CardProps | null>(null);
  const second = useRef<CardProps | null>(null);
  const unflip = useRef(false);

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      // If the card id is not the same as the id clicked, do nothing
      if (card.id !== id) return card;
      // If the card is flipped, it does nothing
      if (card.flipped) return card;
      // Possible turn against wrong
      if (unflip.current && first.current && second.current) {
        first.current.flipped = false;
        second.current.flipped = false;
        first.current = null;
        second.current = null;
        unflip.current = false;
      }
      // Flip the card
      card.flipped = true;
      // Configure first and second card clicked
      if (first.current === null) {
        first.current = card;
      } else if (second.current === null) {
        second.current = card;
      }
      // If i have two cards turned over, check if they are correct
      if (first.current && second.current) {
        if (first.current.back === second.current.back) {
          first.current = null;
          second.current = null;
          setMatches((matcher) => matcher + 1);
        } else {
          unflip.current = true;
        }

        setMoves((move) => move + 1);
      }
      return card;
    });

    setStateCards(newStateCards);
  };

  const handleReset = () => {
    setStateCards(duplicateRegenerateSortArray(cards));
    first.current = null;
    second.current = null;
    unflip.current = false;
    setMatches(0);
    setMoves(0);
  };

  return (
    <S.Container>
      <h1>Memory Game</h1>
      <p>
        Moves: {moves} | Matches: {matches} |{' '}
        <button onClick={() => handleReset()}>RESET</button>
      </p>
      <S.GridContainer>
        {stateCards.map((card) => (
          <li key={card.id}>
            <Card {...card} actionClickCard={handleClick} />
          </li>
        ))}
      </S.GridContainer>
    </S.Container>
  );
};
