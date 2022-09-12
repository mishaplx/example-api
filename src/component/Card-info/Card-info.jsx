import { useState } from "react";
import "./card-info.css";
export const Card = ({ data }) => {
  console.log(data);
  return data.map(item => (
    <ul className="card-wrapper" key={item.id}>
      <li className="id">{item.id}</li>
      <li className="name">{item.name}</li>
      <li className="img">
        <img src={item.image.url} alt={item.id} />
      </li>
      <li className="description">{item.description}</li>
    </ul>
  ));
};
