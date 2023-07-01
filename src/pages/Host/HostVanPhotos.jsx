import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
    const { vanDetails } = useOutletContext();

    return (<img className="host-van-detail-image" src={vanDetails?.imageUrl} alt={vanDetails?.name} />)
}

export default HostVanPhotos;