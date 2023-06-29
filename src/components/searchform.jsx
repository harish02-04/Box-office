import { useState } from 'react';
const searchform = ({ searchQuery }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inp, setinp] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sop, setsop] = useState('shows');

  const setOption = ev => {
    setsop(ev.target.value);
  };
  const Inputchange = ev => {
    setinp(ev.target.value);
  };
  const onsubmit = ev => {
    ev.preventDefault();
    searchQuery(sop, inp);
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input type="text" value={inp} onChange={Inputchange}></input>
        <label>
          Shows
          <input
            type="radio"
            value="shows"
            name="searchoption"
            checked={sop === 'shows'}
            onChange={setOption}
          ></input>
        </label>
        <label>
          Actors
          <input
            type="radio"
            value="actors"
            name="searchoption"
            checked={sop === 'actors'}
            onChange={setOption}
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default searchform;
