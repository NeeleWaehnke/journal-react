import './Entries.css';
import FavouriteButton from './FavouriteButton/FavouriteButton';
import Tabs from './Tabs/Tabs';
import Tabbar from './Tabbar/Tabbar';
import TabBadge from './Tabs/TabBadge';

export default function Entries() {
  return (
    <>
      <Tabbar>
        <Tabs active>
          All Entries <TabBadge isActive>3</TabBadge>
        </Tabs>

        <Tabs>
          Favorite <TabBadge>1</TabBadge>
        </Tabs>
      </Tabbar>
      <section className="entries">
        <h5>date</h5>
        <h4>Title</h4>
        <p>Notes</p>
        <FavouriteButton />
      </section>
    </>
  );
}
