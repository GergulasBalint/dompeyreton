import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    setData(null);
    setError(null);

    fetch(url, {
      signal: abortController.signal,
      ...options
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setLoading(false);
        setError(err);
      });

    return () => abortController.abort();
  }, [url, options]);
  return { data, loading, error };
};

export default useFetch;
