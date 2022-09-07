import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { Card } from "../Card-info/Card-info";
export const Breeds = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(["hi", "by"]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let result = await axios.get(`https://api.thecatapi.com/v1/breeds`, {
          headers: {
            "x-api-key":
              "live_gf0pjveHWvVwLPMSaTmEdWYfljB0o0AS4ikhQGte8hkM4Gk84LuCJ0xoZ8yzjAyB",
          },
          params: {
            page: 1,
            limit: 10,
          },
        });
        setData(result.data);
      } catch (error) {
        console.error(error.message);
      }

      setLoading(false);
    };
    fetchData();
    console.log("Go useEffect");
  }, []);

  return (
    <div>{loading ? <Loading /> :  <Card data = {data}/>}</div>
  );
};
