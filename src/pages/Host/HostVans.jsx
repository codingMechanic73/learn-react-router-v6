import { useGetHostVans } from "../../api/vans";

const HostVans = () => {
    const [data, loading, error] = useGetHostVans()
    console.log(data, loading, error)
    return (
        loading ? "loading" : error ? "error" : <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default HostVans;