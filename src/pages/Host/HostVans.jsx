import { Link } from "react-router-dom";
import { useGetHostVans } from "../../api/vans";
import HostVanDetails from "./HostVansDetail";

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
    )
}

const HostVans = () => {
    const { vans, loading, error } = useGetHostVans()

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {loading && <h4>Loading</h4>}
                {error && <h4>Error</h4>}
                {vans?.map(van => <HostVan key={van.id} van={van} />)}
            </div>

        </section>
    )
}

export default HostVans;