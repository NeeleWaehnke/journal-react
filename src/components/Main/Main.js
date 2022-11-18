import './Main.css';

export default function Main() {
  return (
    <main className="main">
      <form action="" className="form">
        <label htmlFor="input__text" className="label">
          Motto
        </label>
        <input
          type="text"
          id="input__text"
          name="input__text"
          className="input__text"
        />
        <label htmlFor="input__textarea" className="label">
          Notes
        </label>
        <textarea
          name="input__textarea"
          className="input__textarea"
          id="input__textarea"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" id="form__button" className="form__button">
          Create
        </button>
      </form>
      <div className="tabs">
        <button>
          All Entries
          <span className="tab__badge">3</span>
        </button>
        <button>
          Favorites
          <span className="tab__badge">1</span>
        </button>
      </div>
      <section className="entries"></section>
    </main>
  );
}
