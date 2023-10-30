import { useEffect, useState } from "react";

const useGetApi = (url) => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const api = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });

    const response = await api.json();
    console.log(response);
    setData(response);
  }, [url]);

  return data;
};

export default useGetApi;
