import "./main.css";
import axios from "axios";
import { Card } from "../Card-info/Card-info";
import { useEffect, useState } from "react";
import { Categories } from "../Categories/Categories";
import { Loading } from "../Loading/Loading";
const Main = ({ url }) => {
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);

  //     try {
  //       const { data: response } = await axios.get(
  //         `https://api.thecatapi.com/v1/${url}`,
  //         {
  //           headers: {
  //             "x-api-key":
  //               "live_gf0pjveHWvVwLPMSaTmEdWYfljB0o0AS4ikhQGte8hkM4Gk84LuCJ0xoZ8yzjAyB",
  //           },
  //           params: {
  //             page: 1,
  //             limit: 10,
  //           },
  //         }
  //       );
  //       setData(response);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  //   console.log("Go useEffect");
  // }, [url]);
  return (
    <main className="main">
      <div className="container">

        
      </div>
      <div className="pagination-container"> </div>
    </main>
  );
};
export default Main;
