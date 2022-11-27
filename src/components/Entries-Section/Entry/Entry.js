import './Entry.css';
import FavouriteButton from '../FavouriteButton/FavouriteButton';
import styled from 'styled-components';

export default function Entry({ date, motto, notes }) {
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
