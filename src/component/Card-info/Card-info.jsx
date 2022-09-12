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
      <li className="description">temperament: {item.temperament}</li>
      <li className="info-vetstreet">
        <a href={item.vetstreet_url} target="_blank" rel="noreferrer">
          vetstreet
        </a>
      </li>
      <li className="info-vetstreet">
        <a href={item.vcahospitals_url} target="_blank" rel="noreferrer">
          vcahospitals
        </a>
      </li>
      <li className="wikipedia">
        <a href={item.wikipedia_url} target="_blank" rel="noreferrer">
          wikipedia
        </a>
      </li>
    </ul>
  ));
};
