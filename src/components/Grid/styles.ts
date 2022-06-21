import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${() => css`
    max-width: 600px;
    min-width: 310px;
    margin: 0 auto;
    padding: 1rem;
    color: #fff;
    text-align: center;

    p {
      margin-top: 1rem;

      button {
        padding: 0.4rem 0.8rem;
        border-radius: 0.4rem;
        cursor: pointer;
      }
    }
  `}
`;

export const GridContainer = styled.ul`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.2rem;
    margin-top: 1rem;
  `}
`;
