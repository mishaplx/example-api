import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Breeds } from "./component/Breeds/breeds";
import HomePage from "./component/Homepage/HomePage";
import Layout from "./component/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Layout/>}>
          <Route  index path="/" element={<HomePage />} />
          <Route path="/breeds" element={<Breeds />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
