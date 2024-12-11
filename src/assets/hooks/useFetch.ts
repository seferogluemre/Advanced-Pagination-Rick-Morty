import { useEffect, useState } from "react";

const useFetch = <T,>(url: string) => {

    const [data, setData] = useState<T | []>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getFetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const dataJson = await response.json();
                setData(dataJson);
                console.log(dataJson)
                setLoading(false);
            } catch (error) {
                setError((error as Error).message);
                console.error("Hata ile karşılaşıldı: " + error);
            }
            finally {
                setLoading(false);
            }
        }
        getFetchData();

    }, [url])

    return { error, loading, data };
}

export default useFetch;
