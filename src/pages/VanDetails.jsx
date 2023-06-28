import { useParams } from "react-router-dom";
import { useGetVan } from "../api/vans";

const VanDetails = () => {
    const { id } = useParams();
    const [van, loading, error] = useGetVan(id)

    console.log(van)
    return (
        <>
            <h1>Van details</h1>
        </>
    )
}

export default VanDetails;