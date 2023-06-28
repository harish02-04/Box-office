const tit = props => {
  const { t = 'Box-Office', st = 'Are u ready?' } = props;
  return (
    <div>
      <h1>{t}</h1>
      <p>{st}</p>
    </div>
  );
};
export default tit;
