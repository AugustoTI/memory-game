import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${() => css`
    max-width: 640px;
    min-width: 320px;
    margin: 0 auto;
  `}
`;

export const GridContainer = styled.ul`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.2rem;
  `}
`;
