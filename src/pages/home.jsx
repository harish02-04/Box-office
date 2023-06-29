import { useState } from 'react';
import { searchshows, searchactors } from './../api/tvmaze';
import Searchform from './../components/searchform';
import Renderact from './../components/actors/renderact';
import Rendershw from './../components/shows/rendershw.jsx';

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [api, setapi] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [apierr, setapierr] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const searchQuery = async (sop, inp) => {
    try {
      setapierr(null);
      if (sop === 'shows') {
        const res = await searchshows(inp);
        setapi(res);
      } else {
        const res = await searchactors(inp);
        setapi(res);
      }
    } catch (err) {
      setapierr(err);
    }
  };
  const renderapi = () => {
    if (apierr) {
      return <div>Error Occured:{apierr.message}</div>;
    }
    if (api?.length == 0) {
      return <div>No Results</div>;
    } else if (api) {
      return api[0].show ? <Rendershw api={api} /> : <Renderact api={api} />;
    }
    return null;
  };

  return (
    <div>
      <Searchform searchQuery={searchQuery}></Searchform>
      <div>{renderapi()}</div>
    </div>
  );
};
export default home;
