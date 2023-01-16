import styled from 'styled-components';

export default function Entryform({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formElements = form.elements;
    const data = {
      motto: formElements.motto.value,
      notes: formElements.notes.value,
    };
    onAddEntry(data);
    event.target.reset();
  }

  return (
    <>
      <StyledForm action="" className="form" onSubmit={handleSubmit}>
        <StyledHeading className="entryform__title">New Entry</StyledHeading>
        <StyledLabel htmlFor="input__text" className="label">
          Motto:
        </StyledLabel>
        <StyledInput
          type="text"
          id="motto"
          name="motto"
          className="input__text"
          required
        />
        <StyledLabel htmlFor="input__textarea" className="label">
          Notes:
        </StyledLabel>
        <StyledTextarea
          name="notes"
          id="notes"
          className="input__textarea"
          cols="30"
          rows="10"
          required
        ></StyledTextarea>
        <StyledButton type="submit" id="form__button" className="form__button">
          Create
        </StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: block;
  font-family: 'Quicksand';
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin: 1em 0 2em 0;
  background-color: #f9f4ec;
  border: 0.5px solid #efdfdc;
  border-radius: 5px;
  height: 2em;

  &:focus {
    outline: 2px solid #c2847a;
  }
`;
const StyledTextarea = styled.textarea`
  background-color: #f9f4ec;
  border: 0.5px solid #efdfdc;
  display: block;
  width: 100%;
  margin: 1em 0 2em 0;
  border-radius: 5px;
  &:focus {
    outline: 2px solid #c2847a;
  }
`;

const StyledHeading = styled.h2`
  font-family: 'Quicksand';
  text-align: center;
`;

const StyledLabel = styled.label`
  font-size: 17px;
`;

const StyledButton = styled.button`
  margin-bottom: 4%;
  background-color: #c2847a;
  border: 1px solid #c2847a;
  border-radius: 5px;
  color: #f9f4ec;
  font-size: 1em;
  position: relative;
  left: 40%;
  font-family: 'Quicksand';
`;
