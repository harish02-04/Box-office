const actcard = ({ name, img, bday, dday, gender, country }) => {
  return (
    <div>
      <img src={img}></img>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <h2>{!!bday && `Born:${bday}`}</h2>
      <h2>{dday ? `Death: ${dday}` : 'Alive'}</h2>
      <h2>{`Country:${country}`}</h2>
    </div>
  );
};
export default actcard;
