import { useState } from 'react';
import { searchval } from '../lib/search';
import { CustomRadio } from './customradio';
const searchform = ({ searchQuery }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inp, setinp] = searchval();
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

        <CustomRadio
          label="Shows"
          value="shows"
          name="searchoption"
          checked={sop === 'shows'}
          onChange={setOption}
        ></CustomRadio>

        <CustomRadio
          label="Actors"
          value="actors"
          name="searchoption"
          checked={sop === 'actors'}
          onChange={setOption}
        ></CustomRadio>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default searchform;
