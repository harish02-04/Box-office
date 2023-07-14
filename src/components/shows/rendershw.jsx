import { usepersisted } from '../../lib/starredshw';
import Showcard from './showcard';
import { FlexGrid } from '../common/flexgrid';
import NotFoundSrc from '../../lib/imgnf.png';

const rshw = ({ api }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currval, dispatch] = usepersisted();

  const starred = sid => {
    const isstar = currval.includes(sid);
    if (isstar) {
      dispatch({ type: 'UNSTAR', id: sid });
    } else {
      dispatch({ type: 'STAR', id: sid });
    }
  };
  console.log(currval);
  return (
    <FlexGrid>
      {api.map(data => (
        <Showcard
          key={data.show.id}
          name={data.show.name}
          img={data.show.image ? data.show.image.medium : NotFoundSrc}
          summary={data.show.summary}
          id={data.show.id}
          starred={starred}
          isstar={currval.includes(data.show.id)}
        ></Showcard>
      ))}
    </FlexGrid>
  );
};
export default rshw;
