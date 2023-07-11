import { useState, useEffect } from 'react';

const usepersist = (initialState, localkey) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setstate] = useState(() => {
    const pv = sessionStorage.getItem(localkey);
    return pv ? JSON.parse(pv) : initialState;
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    sessionStorage.setItem(localkey, JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, setstate]);

  return [state, setstate];
};

export const searchval = () => {
  return usepersist('', 'Searchquery');
};
