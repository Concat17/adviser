import styled from "styled-components";

export const Card = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2.5rem 0.5rem 4rem;
  width: 90%;

  border-radius: var(--radius);

  background-color: var(--color-blue-400);

  @media (min-width: 1440px) {
    width: 35%;
  }
`;
