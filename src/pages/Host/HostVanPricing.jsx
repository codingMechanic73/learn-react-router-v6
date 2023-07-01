import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
    const { vanDetails } = useOutletContext();

    return (<h2>{vanDetails.price}</h2>)
}

export default HostVanPricing;