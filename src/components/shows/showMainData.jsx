export const ShowMainData = ({ img, name, rating, summary, genres }) => {
  return (
    <div>
      <img src={img ? img.original : '/public/imgnf.png'}></img>

      <h1>Name:{name}</h1>
      <div>{rating.average || 'NA'}</div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <div>
        Genres:
        <div>
          {genres.map(genre => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
