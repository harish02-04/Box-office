const getapi = async q => {
  const response = await fetch(`https://api.tvmaze.com${q}`);
  const body = await response.json();
  return body;
};
export const searchshows = q => getapi(`/search/shows?q=${q}`);
export const searchactors = q => getapi(`/search/people?q=${q}`);
export { getapi };
