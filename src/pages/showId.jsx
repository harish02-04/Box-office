import { useParams } from 'react-router-dom';
import { getshow } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import { ShowMainData } from '../components/shows/showMainData';
import { Details } from '../components/shows/details';
import { Seasons } from '../components/shows/seasons';
import { Casts } from '../components/shows/casts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextCenter } from '../components/common/Textcenter';
const show = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { showId } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getshow(showId),
  });
  if (error) {
    return <TextCenter>Error:{error.message}</TextCenter>;
  }
  if (data) {
    console.log(data._embedded.seasons);
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/home">Go Back</Link>
        </BackHomeWrapper>

        <ShowMainData
          img={data.image}
          name={data.name}
          rating={data.rating}
          summary={data.summary}
          genres={data.genres}
        ></ShowMainData>
        <InfoBlock>
          {' '}
          <Details
            status={data.status}
            prem={data.premiered}
            network={data.network}
          ></Details>
        </InfoBlock>

        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons season={data._embedded.seasons}></Seasons>
        </InfoBlock>
        <InfoBlock>
          <h2>Casts</h2>
          <Casts cast={data._embedded.cast}></Casts>
        </InfoBlock>
      </ShowPageWrapper>
    );
  }
  return <div>Loading.....</div>;
};
export default show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
