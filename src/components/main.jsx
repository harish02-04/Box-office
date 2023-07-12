import Navs from './nav';
import Ptitle from './ptitle';
import { Outlet } from 'react-router-dom';
const main = () => {
  return (
    <div>
      <Ptitle></Ptitle>

      <Navs />
      <Outlet></Outlet>
    </div>
  );
};
export default main;
