import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState('breeds')
  const updateData = async (url) => {
    setUrl(url)
  };
  
  return (
    <div className="App">
      <Header updateData={updateData} />
      <Main url={url}/>
      <Footer />
    </div>
  );
}

export default App;
