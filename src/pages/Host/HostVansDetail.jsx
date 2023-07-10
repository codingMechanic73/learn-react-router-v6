import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { requireAuth } from "../../util";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ request, params }) => {
  await requireAuth(request);
  const response = await fetch(
    `https://64aa228f8b9afaf4844b37d1.mockapi.io/api/vans/${params.id}`,
    {
      signal: request.signal,
    }
  );
  return await response.json();
};

const HostVanDetails = () => {
  const vanDetails = useLoaderData();

  return (
    <>
      <section>
        <Link to={".."} relative="path" className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>
        {vanDetails && (
          <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
              <img src={vanDetails.imageUrl} alt={vanDetails.name} />
              <div className="host-van-detail-info-text">
                <i className={`van-type van-type-${vanDetails.type}`}>
                  {vanDetails.type}
                </i>
                <h3>{vanDetails.name}</h3>
                <h4>${vanDetails.price}/day</h4>
              </div>
            </div>
          </div>
        )}
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            className={({ isActive }) => (isActive ? "active-style" : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? "active-style" : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? "active-style" : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ vanDetails }} />
      </section>
    </>
  );
};

export default HostVanDetails;
