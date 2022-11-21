import './Main.css';
import Entryform from './Entry-form/Entryform';
import Entries from './Entries/Entries';

export default function Main() {
  return (
    <main className="main">
      <Entryform />
      <Entries />
    </main>
  );
}
