import { ReactComponent as IconFilled } from '../../../assets/img/star-_1_.svg';
import { ReactComponent as Icon } from '../../../assets/img/star_1.svg';
import { useState } from 'react';

export default function FavouriteButton() {
  // this should be a state variable
  const [isFavourite, setIsFavourite] = useState(false);

  function handleClick() {
    setIsFavourite(!isFavourite);
  }

  return (
    <button
      className="favorite-button"
      onClick={handleClick}
      aria-label="favorite"
    >
      {isFavourite ? <IconFilled /> : <Icon />}
    </button>
  );
}
