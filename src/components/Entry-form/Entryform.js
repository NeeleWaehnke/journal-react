import './Entryform.css';

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
      <form action="" className="form" onSubmit={handleSubmit}>
        <h2 className="entryform__title">New Entry</h2>
        <label htmlFor="input__text" className="label">
          Motto
        </label>
        <input type="text" id="motto" name="motto" className="input__text" />
        <label htmlFor="input__textarea" className="label">
          Notes
        </label>
        <textarea
          name="notes"
          id="notes"
          className="input__textarea"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" id="form__button" className="form__button">
          Create
        </button>
      </form>
    </>
  );
}
