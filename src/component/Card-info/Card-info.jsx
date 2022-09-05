import axios from "axios";

export const Card = ({ name }) => {
  console.log("data card");
  const data = async (url, limit = 10, page = 1) => {
    const response = await axios.get(`https://api.thecatapi.com/v1/${url}`, {
      headers: {
        "x-api-key":
          "live_gf0pjveHWvVwLPMSaTmEdWYfljB0o0AS4ikhQGte8hkM4Gk84LuCJ0xoZ8yzjAyB",
      },
      params: {
        page: page,
        limit: limit,
      },
    });
    console.log(response.data);
    return await response.data;
  };

  return (
    <div className="card-wrapper">
      <div className="name">{name}</div>
      <div className="img"></div>
      <div className="description"></div>
    </div>
  );
};
