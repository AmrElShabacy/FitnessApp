import { useState, useEffect } from "react";
import { IoFastFood } from "react-icons/io5";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        if (response.statusText === "No Content") return null;
        return response.json();
      })
      .then((response) => {
        setIsLoading(false);
        setData(response);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isLoading, error };
};
