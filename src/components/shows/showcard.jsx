const shwcard = ({ name, img, summary, id, starred, isstar }) => {
  const summ = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.*?>/g, '')
    : 'No Description';
  return (
    <div>
      <img src={img}></img>
      <h1>{name}</h1>
      <p>{summ}</p>
      <a href={`/show/${id}`} target="blank">
        Read more
      </a>
      <button type="button" onClick={() => starred(id)}>
        {isstar ? 'Unstar' : 'Star'}
      </button>
    </div>
  );
};
export default shwcard;
