import styled from 'styled-components';

export default function Tabbar({ children }) {
  return (
    <>
      <StyledTabbar className="tabbar">{children}</StyledTabbar>
    </>
  );
}

const StyledTabbar = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`;
