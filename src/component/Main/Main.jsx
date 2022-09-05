import "./main.css";
import axios from "axios";
import { Card } from "../Card-info/Card-info";
import { useEffect, useState } from "react";

const Main = ({ url }) => {
  const [data, setAppState] = useState({
    loading: false,
    data: [],
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.thecatapi.com/v1/${url}`;
    axios
      .get(apiUrl, {
        headers: {
          "x-api-key":
            "live_gf0pjveHWvVwLPMSaTmEdWYfljB0o0AS4ikhQGte8hkM4Gk84LuCJ0xoZ8yzjAyB",
        },
        params: {
          page: 1,
          limit: 10,
        },
      })
      .then(repos => {
        const allRepos = repos.data;
        setAppState({ loading: false, data: allRepos });
      });
      console.log(data);
  }, [setAppState]);

  return (
    <main className="main">
      <div>{url}</div>
      <div className="container">
        {/* {data.map(item => (
          <Card name={item.name} />
        ))} */}
      </div>
      <div className="pagination-container"> </div>
    </main>
  );
};
export default Main;
