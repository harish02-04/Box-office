import styled from 'styled-components';
const tit = props => {
  const { t = 'Box-Office', st = 'Are u ready?' } = props;
  return (
    <TitleWrapper>
      <h1>{t}</h1>
      <p>{st}</p>
    </TitleWrapper>
  );
};
export default tit;
const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;
