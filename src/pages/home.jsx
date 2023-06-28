import { useState } from 'react';
import { search } from './../api/tvmaze';
const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inp, setinp] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [api, setapi] = useState(null);

  const Inputchange = ev => {
    setinp(ev.target.value);
  };
  const searchQuery = async ev => {
    ev.preventDefault();
    const res = await search(inp);
    console.log(res);
    {
      /*const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${inp}`
    );
    const body = await response.json();
    console.log(body);*/
    }
  };
  return (
    <div>
      <h6>{inp}</h6>
      <form onSubmit={searchQuery}>
        <input type="text" value={inp} onChange={Inputchange}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default home;
