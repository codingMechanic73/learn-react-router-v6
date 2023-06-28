import { useState } from "react";
import { useEffect } from "react";

export const useGetAllVans = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        (async () => {
            setLoading(true)
            try {
                const response = await fetch("/api/vans", { signal });
                const json = await response.json();
                setData(json.vans);
            } catch (err) {
                setError(err);
            }
            setLoading(false)
        })();


        return () => {
            controller.abort();
        }
    }, [])

    return [data, loading, error];
}

export const useGetVan = (id) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        (async () => {
            setLoading(true)
            try {
                const response = await fetch(`/api/vans/${id}`, { signal });
                const json = await response.json();
                setData(json.vans);
            } catch (err) {
                setError(err);
            }
            setLoading(false)
        })();


        return () => {
            controller.abort();
        }
    }, [id])

    return [data, loading, error];
}