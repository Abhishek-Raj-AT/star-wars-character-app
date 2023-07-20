import { Link } from "react-router-dom";
import { Strings } from "../../resource/Strings";
import "./Home.css";

const Home = () => {
  return (
    <div style={{ textAlign: "left", marginLeft: "60px", display: "flex" }}>
      <div className="listStyle">
        <li>
          {Strings.films}
          <div>
            <Link to="/films">view</Link>
            <br />
          </div>
        </li>
      </div>
      <div className="listStyle">
        <li>
          {Strings.starShips}
          <div>
            <Link to="/starship"> view</Link>
          </div>
        </li>
      </div>
      <div className="listStyle">
        <li>
          {Strings.people}
          <div>
            <Link to="/people">view</Link>
          </div>
        </li>
      </div>
      <div className="listStyle">
        <li>
          {Strings.vehicles}
          <div>
            <Link to="/vehicle">view</Link>
          </div>
        </li>
      </div>
      <div className="listStyle">
        <li>
          {Strings.species}
          <div>
            <Link to="/species">view</Link>
          </div>
        </li>
      </div>
      <div className="listStyle">
        <li>
          {Strings.planets}
          <div>
            <Link to="/planets">view</Link>
          </div>
        </li>
      </div>
    </div>
  );
};
export default Home;
