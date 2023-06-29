import Showcard from './showcard';
const rshw = ({ api }) => {
  return (
    <div>
      {api.map(data => (
        <Showcard
          key={data.show.id}
          name={data.show.name}
          img={data.show.image ? data.show.image.medium : '/imgnf.png'}
          summary={data.show.summary}
        ></Showcard>
      ))}
    </div>
  );
};
export default rshw;
