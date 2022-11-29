import { ReactComponent as IconFilled } from '../../../assets/img/star-_1_.svg';
import { ReactComponent as Icon } from '../../../assets/img/star_1.svg';
import { useState } from 'react';
import styled from 'styled-components';

export default function FavouriteButton() {
  // this should be a state variable
  const [isFavourite, setIsFavourite] = useState(false);

  function handleClick() {
    setIsFavourite(!isFavourite);
  }

  return (
    <StyledButton
      className="favorite-button"
      onClick={handleClick}
      aria-label="favorite"
    >
      {isFavourite ? <IconFilled /> : <Icon />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  align-items: flex-end;
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  border-radius: 999px;
  aspect-ratio: 1;
  transition: background-color 0.2s ease-in-out;
  background-color: transparent;
  margin: -6px;
  padding: 6px;
`;
