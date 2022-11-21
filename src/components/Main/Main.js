import './Main.css';
import Entryform from '../Entry-form/Entryform';
import EntriesSection from '../Entries-Section/EntriesSection';

export default function Main() {
  return (
    <main className="main">
      <Entryform />
      <EntriesSection />
    </main>
  );
}
