import Entryform from '../Entry-form/Entryform';
import EntriesSection from '../Entries-Section/EntriesSection';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Divider from '../Entries-Section/Divider/Divider';
import styled from 'styled-components';

export default function Main() {
  const [entries, setEntries] = useState(initialEntries);
  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString('en-us', {
      dateStyle: 'medium',
    });

    setEntries([{ id: nanoid(), date, ...newEntry }, ...entries]);
  }

  return (
    <StyledMain className="main">
      <Entryform onAddEntry={handleAddEntry} />
      <Divider></Divider>
      <EntriesSection entries={entries} />
    </StyledMain>
  );
}

const initialEntries = [
  {
    id: 1000,
    date: 'Feb 5, 2025',
    motto: 'We are in a state of chaos',
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: 'Feb 4, 2025',
    motto: 'Props, Props, Props',
    notes:
      'Today I learned about React Props. Mad props to everyone who understands this!',
  },
  {
    id: 998,
    date: 'Feb 3, 2025',
    motto: 'How to nest components online fast',
    notes:
      'Today I learned about React Components and how to nest them like a pro. Application design is so much fun!',
  },
  {
    id: 997,
    date: 'Feb 2, 2025',
    motto: "I'm a React Developer",
    notes: 'My React-ion when I learned about React: 😍',
  },
];

const StyledMain = styled.main`
  display: block;
  width: 80%;
  margin: auto;
`;
