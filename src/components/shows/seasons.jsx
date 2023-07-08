export const Seasons = ({ season }) => {
  console.log(season);
  return (
    <div>
      <h1>Seasons</h1>
      <p>Seasons in total: {season.length}</p>
      <p>
        Episodes in total:
        {season.reduce((sum, seasons) => sum + seasons.episodeOrder, 0)}
      </p>
      <div>
        {season.map(seasons => {
          <div key={seasons.id}>
            <p>Season:{seasons.number}</p>
            <p>Episodes:{seasons.episodeOrder}</p>
            <p>
              Aired:{seasons.premiereDate}-{seasons.endDate}
            </p>
          </div>;
        })}
      </div>
    </div>
  );
};
