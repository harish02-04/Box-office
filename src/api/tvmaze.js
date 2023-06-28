const getapi = async q => {
  const response = await fetch(`https://api.tvmaze.com${q}`);
  const body = await response.json();
  return body;
};
export const search = q => getapi(`/search/shows?q=${q}`);
export { getapi };
