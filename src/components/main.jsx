import Navs from './nav';
import Ptitle from './ptitle';
import { Outlet } from 'react-router-dom';
const main = () => {
  return (
    <div>
      <Navs />
      <Ptitle></Ptitle>
      <Outlet></Outlet>
    </div>
  );
};
export default main;
