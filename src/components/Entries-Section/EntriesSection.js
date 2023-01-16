import Tabs from './Tabs/Tabs';
import Tabbar from './Tabbar/Tabbar';
import TabBadge from './Tabs/TabBadge';
import Entry from './Entry/Entry';
import { Fragment } from 'react';
import Divider from './Divider/Divider';

export default function EntriesSection({ entries }) {
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
      {entries.map((entry, index) => {
        return (
          <Fragment key={entry.id}>
            <Entry date={entry.date} motto={entry.motto} notes={entry.notes} />
            {index === entries.length - 1 ? '' : <Divider />}
          </Fragment>
        );
      })}
    </>
  );
}
