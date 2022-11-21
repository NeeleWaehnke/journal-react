import { ReactComponent as IconFilled } from '../../../assets/img/star-_1_.svg';
import { ReactComponent as Icon } from '../../../assets/img/star_1.svg';

export default function FavouriteButton() {
  // this should be a state variable
  const isFavorite = false;

  return (
    <button
      className="favorite-button"
      onClick={() => {
        console.log('favorite button clicked');
      }}
      aria-label="favorite"
    >
      {isFavorite ? <IconFilled /> : <Icon />}
    </button>
  );
}
