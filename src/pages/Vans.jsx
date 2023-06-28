import { Link } from 'react-router-dom';
import { useGetAllVans } from '../api/vans';

const Van = ({ van }) => {
    return (
        <Link to={`/vans/${van.id}`} className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
    )
}

const Vans = () => {

    const [vans, loading, error] = useGetAllVans();

    return (
        <>
            <h1>Explore our van options</h1>
            {!loading && vans.map(van => <Van key={van.id} van={van} />)}
        </>
    )
}

export default Vans;