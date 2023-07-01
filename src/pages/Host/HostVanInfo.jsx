import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
    const { vanDetails } = useOutletContext();
    return (<section className="host-van-detail-info">
        <h4>Name: {vanDetails?.name}</h4>
        <h4>Category: {vanDetails?.type}</h4>
        <h4>Description: {vanDetails?.description}</h4>
        <h4>Visibility: Public</h4>
    </section>)
}

export default HostVanInfo;
