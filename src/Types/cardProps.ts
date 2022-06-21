export interface CardProps {
  id: string;
  flipped?: boolean;
  back: string;
  actionClickCard?: (id: string) => void;
}
