import Actcard from './actorcard';
const ract = ({ api }) => {
  console.log(api);
  return (
    <div>
      {api.map(data => (
        <Actcard
          key={data.person.id}
          name={data.person.name}
          gender={data.person.gender}
          bday={data.person.birthday}
          dday={data.person.deathday}
          country={data.country ? data.country.name : 'Not Known'}
          img={data.person.image ? data.person.image.medium : '/imgnf.png'}
        ></Actcard>
      ))}
    </div>
  );
};
export default ract;
