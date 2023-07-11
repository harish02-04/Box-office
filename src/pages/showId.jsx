import { useParams } from 'react-router-dom';
import { getshow } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import { ShowMainData } from '../components/shows/showMainData';
import { Details } from '../components/shows/details';
import { Seasons } from '../components/shows/seasons';
import { Casts } from '../components/shows/casts';
import { Link } from 'react-router-dom';
const show = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { showId } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getshow(showId),
  });
  if (error) {
    return <div>Error:{error.message}</div>;
  }
  if (data) {
    console.log(data._embedded.seasons);
    return (
      <div>
        <Link to="/home">Go Back</Link>

        <ShowMainData
          img={data.image}
          name={data.name}
          rating={data.rating}
          summary={data.summary}
          genres={data.genres}
        ></ShowMainData>

        <Details
          status={data.status}
          prem={data.premiered}
          network={data.network}
        ></Details>
        <div>
          <div>
            <Seasons season={data._embedded.seasons}></Seasons>
          </div>
          <div>
            <Casts cast={data._embedded.cast}></Casts>
          </div>
        </div>
      </div>
    );
  }
  return <div>Loading.....</div>;
};
export default show;
