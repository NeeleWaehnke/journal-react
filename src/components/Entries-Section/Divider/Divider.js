import styled from 'styled-components';

export default function Divider() {
  return <StyledDivider className="divider" role="none" />;
}

const StyledDivider = styled.hr`
  border: none;
  width: 100%;
  margin: 0;
  height: 1px;
  background: lightgray;
`;
