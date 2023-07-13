import { useQuery } from '@tanstack/react-query';
import { usepersisted } from '../lib/starredshw';
import { getshsbyid } from '../api/tvmaze';
import RenderShw from '../components/shows/rendershw.jsx';
import { TextCenter } from '../components/common/Textcenter';
const star = () => {
  const [starshwids] = usepersisted();
  console.log(starshwids);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: shw, error: shwerr } = useQuery({
    queryKey: ['starred', starshwids],
    queryFn: () =>
      getshsbyid(starshwids).then(res => res.map(show => ({ show }))),
    refetchOnWindowFocus: 'false',
  });
  if (shw?.length == 0) {
    return <TextCenter>No starred shows</TextCenter>;
  }
  if (shw?.length > 0) {
    return <RenderShw api={shw}></RenderShw>;
  } else if (shwerr) {
    return <TextCenter>Error</TextCenter>;
  }
  return <dTextCenter>Loading....</dTextCenter>;
};
export default star;
