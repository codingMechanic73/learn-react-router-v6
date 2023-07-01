import { Link } from 'react-router-dom';
import { useGetAllVans } from '../api/vans';
import { useSearchParams } from 'react-router-dom';

const Van = ({ van }) => {
    return (
        <div key={van.id} className='van-title'>
            <Link to={`/vans/${van.id}`} className="van-tile">
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>

    )
}

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    const { vans, loading, error } = useGetAllVans();
    const filteredVans = typeFilter ? vans?.filter(van => van.type === typeFilter) : vans

    return (
        <div className='van-list-container'>

            <h1>Explore our van options</h1>
            <div className='van-list-filter-buttons scrollable'>
                <Link className='van-type simple' to="?type=simple">Simple</Link>
                <Link className='van-type rugged' to="?type=rugged">Rugged</Link>
                <Link className='van-type luxury' to="?type=luxury">Luxury</Link>
                <Link className='van-type clear-filters' to="">Clear Filters</Link>
            </div>
            <div className='van-list'>
                {!loading && filteredVans?.map(van => <Van key={van.id} van={van} />)}
            </div>
        </div>
    )
}

export default Vans;