import "./main.css";
import axios from "axios";
import { Card } from "../Card-info/Card-info";
import { useEffect, useState } from "react";
import { Categories } from "../Categories/Categories";
import { Loading } from "../Loading/Loading";
const Main = ({ url }) => {
  return (
    <main className="main">
      <div className="container">
      </div>
      <div className="pagination-container"> </div>
    </main>
  );
};
export default Main;
