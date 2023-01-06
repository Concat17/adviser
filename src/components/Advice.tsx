import styled from "styled-components";

const StyledAdvice = styled.span`
  margin-bottom: 2rem;

  text-align: center;
`;

type AdviceProps = {
  advice: string;
};

export const Advice = ({ advice }: AdviceProps) => (
  <StyledAdvice>“{advice}”</StyledAdvice>
);
