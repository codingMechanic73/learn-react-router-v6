import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container'>
            <h1>You got travel plans, we got travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement.
                Rent the perfect van to make you perfect road trip.
            </p>
            <Link to={"/vans"}>Find your van</Link>
        </div>
    )
}

export default Home;