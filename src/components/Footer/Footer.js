import styled from 'styled-components';

export default function Footer() {
  return <StyledFooter className="footer">Journal - 2022</StyledFooter>;
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3em;
  bottom: 0;
  padding: 5px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  font-family: Quicksand;
  font-size: 20px;
  background-color: #280003;
  color: #eee0cb;
`;
