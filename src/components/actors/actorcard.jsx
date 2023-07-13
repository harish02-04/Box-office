import { SearchCard, SearchImgWrapper } from '../common/Searchcard';
const actcard = ({ name, img, bday, dday, gender, country }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={img}></img>
      </SearchImgWrapper>

      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      <p>{!!bday && `Born ${bday}`}</p>
      <p>{dday ? `Death: ${dday}` : 'Alive'}</p>
    </SearchCard>
  );
};
export default actcard;
