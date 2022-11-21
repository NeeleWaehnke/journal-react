export default function Entries() {
  return (
    <>
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
      <section className="entries">
        <h5>date</h5>
        <h4>Title</h4>
        <p>Notes</p>
      </section>
    </>
  );
}
