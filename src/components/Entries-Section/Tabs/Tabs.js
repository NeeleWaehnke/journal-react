import styled from 'styled-components';

export default function Tabs({ children, isActive }) {
  return (
    <StyledTab className={`tab${isActive ? ' tab--active' : ''}`}>
      {children}
    </StyledTab>
  );
}

const StyledTab = styled.button`
  border: none;
  background-color: unset;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  transition: background-color 0.2s ease-in-out;
  background-color: transparent;
  margin: -10px -16px;
  padding: 10px 16px;
  border-radius: 999px;
  font-family: 'Quicksand';

  &:hover {
    background-color: #848586;
  }

  &:active {
    background-color: #848586;
  }
  .tab--active {
    color: #c2847a;
  }
`;
