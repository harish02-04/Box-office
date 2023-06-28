import { Link } from 'react-router-dom';
const arr = [
  {
    text: 'Home',
    to: '/home',
  },
  {
    text: 'Starred',
    to: '/star',
  },
];
const nav = () => {
  return (
    <div>
      <ul>
        {arr.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default nav;
