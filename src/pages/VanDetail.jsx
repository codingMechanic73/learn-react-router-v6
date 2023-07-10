import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ request, params }) => {
  const response = await fetch(
    `https://64aa228f8b9afaf4844b37d1.mockapi.io/api/vans/${params.id}`,
    {
      signal: request.signal,
    }
  );
  return await response.json();
};

const VanDetail = () => {
  const location = useLocation();
  const van = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

      <div className="van-detail">
        <img src={van.imageUrl} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
};

export default VanDetail;
