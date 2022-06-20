import styled, { css } from 'styled-components';
import { Sides } from '../../Types/sides';

interface CardFaceProps {
  side: Sides;
}

const chooseColor = <T extends Sides>(side: T) => {
  if (side === 'front') {
    return css`
      background-color: var(--color-primary);
      color: var(--text-white);
    `;
  }

  return css`
    background-color: var(--color-secondary);
    color: var(--text-dark);
    transform: rotateY(180deg);
  `;
};

export const Container = styled.div`
  ${() => css`
    .content {
      position: relative;
      width: 200px;
      height: 200px;
      transform-style: preserve-3d;
      transition: transform 600ms ease-in-out;

      &.flipped {
        transform: rotateY(180deg);
      }
    }
  `}
`;

export const CardFace = styled.div<CardFaceProps>`
  ${({ side }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    ${chooseColor(side)};
    backface-visibility: hidden;
    display: grid;
    place-items: center;
    font-size: 8rem;
  `}
`;
