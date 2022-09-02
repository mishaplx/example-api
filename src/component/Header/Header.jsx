import "./header.css";
import axios from "axios";
import env from "react-dotenv";
console.log(process.env.NODE_ENV);
const Header = () => {
  const breeds = () => {
    axios.get("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": "asd",
      },
    }).
    then(res => console.log(res))
  };
  console.log(breeds());
  return (
    <header className="header">
      <nav className="nav">
        <div>breeds</div>
        <div>categories</div>
        <div>votes</div>
        <div>favourites</div>
        <div>images</div>
        <div>Models</div>
      </nav>
    </header>
  );
};

export default Header;
