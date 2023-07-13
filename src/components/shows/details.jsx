import styled from 'styled-components';
export const Details = ({ status, prem, network }) => {
  return (
    <DetailsWrapper>
      <h1>Details</h1>
      <div>Status:{status}</div>
      <div>
        Premiered on:{prem}
        {!!network && `on ${network.name}`}
      </div>
    </DetailsWrapper>
  );
};

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
