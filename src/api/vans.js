import { useState } from "react";
import { useEffect } from "react";

export const useGetAllVans = () => {

    const [data, setData] = useState({
        vans: null,
        error: "",
        loading: false
    })

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        (async () => {
            try {
                setData((prevData) => ({
                    ...prevData,
                    error: "",
                    vans: null,
                    loading: true
                }));
                const response = await fetch(`/api/vans`, { signal });
                const json = await response.json();
                setData((prevData) => ({
                    ...prevData,
                    error: "",
                    vans: json.vans,
                    loading: false
                }));
            } catch (err) {
                if (err.name != "AbortError") {
                    setData((prevData) => ({
                        ...prevData,
                        error: err,
                        vans: null,
                        loading: false,
                    }));
                }
            }
        })();

        return () => {
            controller.abort();
        }
    }, []);

    return data;
}

export const useGetVan = (id) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

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

export const useGetHostVans = () => {

    const [data, setData] = useState({
        vans: [],
        error: "",
        loading: false
    })

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        (async () => {
            try {
                setData((prevData) => ({
                    ...prevData,
                    error: "",
                    vans: [],
                    loading: true
                }));
                const response = await fetch("/api/host/vans", { signal });
                const json = await response.json();
                setData((prevData) => ({
                    ...prevData,
                    error: "",
                    vans: json.vans,
                    loading: false
                }));
            } catch (err) {
                if (err.name != "AbortError") {
                    setData((prevData) => ({
                        ...prevData,
                        error: err,
                        vans: [],
                        loading: false
                    }));
                }
            }
        })();

        return () => {
            controller.abort();
        }
    }, []);

    return data;
}


export const useGetHostVanDetails = (id) => {

    const [data, setData] = useState({
        vanDetails: null,
        error: "",
        loading: false
    })

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        (async () => {
            try {
                setData((prevData) => ({
                    ...prevData,
                    error: "",
                    vanDetails: null,
                    loading: true
                }));
                const response = await fetch(`/api/host/vans/${id}`, { signal });
                const json = await response.json();
                console.log(json)
                setData((prevData) => ({
                    ...prevData,
                    error: "",
                    vanDetails: json.vans,
                    loading: false
                }));
            } catch (err) {
                if (err.name != "AbortError") {
                    setData((prevData) => ({
                        ...prevData,
                        error: err,
                        vanDetails: null,
                        loading: false,
                    }));
                }
            }
        })();

        return () => {
            controller.abort();
        }
    }, []);

    return data;
}