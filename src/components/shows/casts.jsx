export const Casts = ({ cast }) => {
  return (
    <div>
      <h1>Cast</h1>
      <div>
        {cast.map(({ person, character, voice }) => {
          return (
            <div key={person.id}>
              <div>
                <img
                  src={person.image ? person.image.medium : '/imgnf.png'}
                ></img>
              </div>
              <div>
                {person.name} | {character.name} {voice && '|voiceover'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
