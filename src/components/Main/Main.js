import './Main.css';

export default function Main() {
  return (
    <main>
      <form action="">
        <label htmlFor="input__text">Motto</label>
        <input
          type="text"
          id="input__text"
          name="input__text"
          className="input__text"
        />
        <label htmlFor="input__textarea">Notes</label>
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
      <section className="entries">
        <div className="entries__tab">
          <button>
            All Entries
            <span className="tab__badge">3</span>
          </button>
          <button>
            Favorites
            <span className="tab__badge">1</span>
          </button>
        </div>
      </section>
    </main>
  );
}
