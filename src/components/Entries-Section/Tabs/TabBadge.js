import styled from 'styled-components';

export default function TabBadge({ children, isActive }) {
  return (
    <StyledBadge className={`badge${isActive ? ' badge--active' : ''}`}>
      {children}
    </StyledBadge>
  );
}

const StyledBadge = styled.span`
  display: inline-block;
  font-size: 12px;
  padding: 2px 9px;
  border-radius: 999px;
  background-color: #848586;
  color: #eee0cb;
  font-weight: 400;

  .badge--active {
    background-color: #c2847a;
    color: #eee0cb;
  }
`;
