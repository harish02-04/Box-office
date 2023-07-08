import { useState } from 'react';
import { searchshows, searchactors } from './../api/tvmaze';
import Searchform from './../components/searchform';
import Renderact from './../components/actors/renderact';
import Rendershw from './../components/shows/rendershw.jsx';
import { useQuery } from '@tanstack/react-query';

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [filter, setfilter] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: api, error: apierr } = useQuery({
    queryKey: ['todos', filter],
    queryFn: () =>
      filter.sop === 'shows'
        ? searchshows(filter.inp)
        : searchactors(filter.inp),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: 'false',
  });

  const searchQuery = async (sop, inp) => {
    setfilter({ sop, inp });
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
