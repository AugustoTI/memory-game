import { CardProps } from '../../Types/cardProps';
import * as S from './styles';

export const Card = ({
  flipped = false,
  back,
  id,
  actionClickCard,
}: CardProps) => {
  const cardContentClassNames = ['content'];
  flipped && cardContentClassNames.push('flipped');

  const handleClick = () => {
    if (actionClickCard) {
      actionClickCard(id);
    }
  };

  return (
    <S.Container onClick={() => handleClick()}>
      <div className={cardContentClassNames.join(' ')}>
        <S.CardFace side="front">?</S.CardFace>
        <S.CardFace side="back">{back}</S.CardFace>
      </div>
    </S.Container>
  );
};
