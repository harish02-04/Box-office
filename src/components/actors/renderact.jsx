import Actcard from './actorcard';
import { FlexGrid } from '../common/flexgrid';
import NotFoundSrc from '../../lib/imgnf.png';
const ract = ({ api }) => {
  console.log(api);
  return (
    <FlexGrid>
      {api.map(data => (
        <Actcard
          key={data.person.id}
          name={data.person.name}
          gender={data.person.gender}
          bday={data.person.birthday}
          dday={data.person.deathday}
          country={data.person.country ? data.person.country.name : null}
          img={data.person.image ? data.person.image.medium : NotFoundSrc}
        ></Actcard>
      ))}
    </FlexGrid>
  );
};
export default ract;
