import { useEffect, useReducer } from 'react';
import Showcard from './showcard';

const rshw = ({ api }) => {
  const usepersist = (reducer, initialState, localkey) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(reducer, initialState, initial => {
      const pv = localStorage.getItem(localkey);
      return pv ? JSON.parse(pv) : initial;
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      localStorage.setItem(JSON.stringify(state), localkey);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, dispatch]);

    return [state, dispatch];
  };
  const setstarred = (currval, action) => {
    switch (action.type) {
      case 'STAR':
        return currval.concat(action.id);
      case 'UNSTAR':
        return currval.filter(shwid => shwid !== action.id);
      default:
        return currval;
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currval, dispatch] = usepersist(setstarred, [], 'StarredShows');

  const starred = sid => {
    const isstar = currval.includes(sid);
    if (isstar) {
      dispatch({ type: 'UNSTAR', id: sid });
    } else {
      dispatch({ type: 'STAR', id: sid });
    }
  };
  return (
    <div>
      {api.map(data => (
        <Showcard
          key={data.show.id}
          name={data.show.name}
          img={data.show.image ? data.show.image.medium : '/imgnf.png'}
          summary={data.show.summary}
          id={data.show.id}
          starred={starred}
        ></Showcard>
      ))}
    </div>
  );
};
export default rshw;
