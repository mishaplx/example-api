import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Loading } from "../Loading/Loading";
import './categories.css'
export const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        let result = await axios.get(
          "https://api.thecatapi.com/v1/categories",
          {
            headers: {
              "x-api-key":
                "live_gf0pjveHWvVwLPMSaTmEdWYfljB0o0AS4ikhQGte8hkM4Gk84LuCJ0xoZ8yzjAyB",
            },
          }
        );
        setData(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    setLoading(false);
  });

  return (
    <div className="categories">
      <ul>{loading ? <Loading /> : data.map(item => <li>{item.name}</li>)}</ul>
    </div>
  );
};
