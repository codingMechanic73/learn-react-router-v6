import { Link } from "react-router-dom";
import { requireAuth } from "../../util";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ request }) => {
  await requireAuth(request);
  const response = await fetch(
    `https://64aa228f8b9afaf4844b37d1.mockapi.io/api/vans`,
    { signal: request.signal }
  );
  return await response.json();
};

const HostVan = ({ van }) => {
  return (
    <Link to={`/host/vans/${van.id}`} className="host-van-link-wrapper">
      <div className="host-van-single">
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  );
};

const HostVans = () => {
  const vans = useLoaderData();

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans?.map((van) => (
          <HostVan key={van.id} van={van} />
        ))}
      </div>
    </section>
  );
};

export default HostVans;
