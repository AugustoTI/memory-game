import { CardProps } from '../components/Card';

const keyGen = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const duplicateArray = <T>(array: T[]) => {
  return [...array, ...array];
};

export const sortArray = <T>(array: T[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export const regenerateCard = (card: CardProps[]) => {
  return card.map((card) => ({ ...card, id: keyGen() }));
};

export const duplicateRegenerateSortArray = (cards: CardProps[]) => {
  return sortArray(regenerateCard(duplicateArray(cards)));
};
