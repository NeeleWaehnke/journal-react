//import './Entry.css';
import FavouriteButton from '../FavouriteButton/FavouriteButton';
import styled from 'styled-components';

export default function Entry({ date, motto, notes }) {
  return (
    <StyledSection className="entry__section">
      <p className="entry__date">{date}</p>
      <StyledEntryContent className="entry__content-headline">
        <h3>"{motto}"</h3>
        <FavouriteButton />
      </StyledEntryContent>
      <p className="entry__notes">{notes}</p>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  color: #262627;

  .entry__date {
    font-family: 'Quicksand';
    font-weight: 300;
    color: #323334;
    text-align: center;
  }

  .entry__notes {
    color: #323334;
    font-weight: 400;
    font-family: 'Quicksand';
  }
`;

const StyledEntryContent = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-family: 'Quicksand';
    font-size: 20px;
    color: #280003;
  }

  q {
    font-weight: 700;
  }
`;
