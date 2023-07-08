export const Details = ({ status, prem, network }) => {
  return (
    <div>
      <h1>Details</h1>
      <div>Status:{status}</div>
      <div>
        Premiered on:{prem}
        {!!network && `on ${network.name}`}
      </div>
    </div>
  );
};
