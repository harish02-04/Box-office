import { useEffect, useReducer } from 'react';
const usepersist = (reducer, initialState, localkey) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const pv = localStorage.getItem(localkey);
    return pv ? JSON.parse(pv) : initial;
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    localStorage.setItem(localkey, JSON.stringify(state));
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

export const usepersisted = () => {
  return usepersist(setstarred, [], 'StarredShows');
};
