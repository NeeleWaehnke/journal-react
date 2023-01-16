import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <h1 className="Header">My Journal</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  h1 {
    border: 1px solid #75423f;
    font-family: 'Quicksand';
    font-weight: 700;
    background-color: #75423f;
    padding: 2.5%;
    margin-top: 0;
    color: #eee0cb;
    text-align: center;
  }
`;
