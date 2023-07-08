import { Link } from 'react-router-dom';
const shwcard = ({ name, img, summary, id }) => {
  const summ = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.*?>/g, '')
    : 'No Description';
  return (
    <div>
      <img src={img}></img>
      <h1>{name}</h1>
      <p>{summ}</p>
      <Link to={`/show/${id}`}>Read more</Link>
      <button>Starred</button>
    </div>
  );
};
export default shwcard;
