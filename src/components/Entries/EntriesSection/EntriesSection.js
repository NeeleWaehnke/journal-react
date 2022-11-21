import './EntriesSection.css';
import FavouriteButton from '../FavouriteButton/FavouriteButton';

export default function EntriesSection({ date, motto, notes }) {
  return (
    <section className="entry__section">
      <p className="entry__date">{date}</p>
      <div className="entry_content">
        <div className="entry__content-headline">
          <h4>{motto}</h4>
          <FavouriteButton />
        </div>
        <p>{notes}</p>
      </div>
    </section>
  );
}
