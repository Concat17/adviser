import styled from "styled-components";

const StyledTitle = styled.span`
  margin-bottom: 1.5rem;

  font-size: var(--fs-sm);
  color: var(--color-green);
  letter-spacing: 3px;
`;

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => (
  <StyledTitle>{title}</StyledTitle>
);
