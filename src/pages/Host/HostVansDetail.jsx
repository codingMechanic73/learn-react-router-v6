import { useParams } from "react-router-dom";
import { useGetHostVanDetails } from "../../api/vans";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const HostVanDetails = () => {

    const { id } = useParams();
    const { vanDetails, loading, error } = useGetHostVanDetails(id);

    return (
        <>
            <section>
                <Link to={".."} relative="path" className="back-button">&larr; <span>Back to all vans</span></Link>
                {loading && <h4>Loading</h4>}
                {error && <h4>error</h4>}
                {vanDetails && <div className="host-van-detail-layout-container">
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
                </div>}
                <nav className='host-van-detail-nav'>
                    <NavLink to="." className={({ isActive }) => isActive ? "active-style" : null}>Details</NavLink>
                    <NavLink to="pricing" className={({ isActive }) => isActive ? "active-style" : null}>Pricing</NavLink>
                    <NavLink to="photos" className={({ isActive }) => isActive ? "active-style" : null}>Photos</NavLink>
                </nav>
                <Outlet context={{ vanDetails }} />
            </section>
        </>
    )
}

export default HostVanDetails;