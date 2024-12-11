import { useEffect, useState } from "react";

const useFetch = <T,>(url: string) => {

    const [data, setData] = useState<T | []>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [pageCount, setPageCount] = useState<number>(1);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getFetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const dataJson = await response.json();
                setData(dataJson);
                // Sayfa sayısını dataJson içinden info.pages alarak set ediyoruz
                if (dataJson.info && dataJson.info.pages) {
                    setPageCount(dataJson.info.pages);
                }
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

    return { error, loading, data, pageCount };
}

export default useFetch;
