import { DiceIcon } from "../icons";
import styled from "styled-components";

const StyledIconButton = styled.button`
  position: absolute;
  //TODO: try to make calc value, not hard code
  bottom: -28px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  border: none;
  border-radius: 9999px;

  background-color: var(--color-green);

  cursor: pointer;

  &:active {
    box-shadow: 0 0 10px var(--color-green), 0 0 40px var(--color-green);
  }
`;

type IconButtonProps = {
  onClick: () => void;
};

export const IconButton = ({ onClick }: IconButtonProps) => {
  return (
    <StyledIconButton onClick={onClick}>
      <DiceIcon />
    </StyledIconButton>
  );
};
