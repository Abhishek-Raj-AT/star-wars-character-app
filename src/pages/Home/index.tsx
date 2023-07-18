import { Link, To, useNavigate } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { filmAction } from "../../redux/FilmSlice";
import { Strings } from "../../resource/Strings";
import './Home.css'
import { getFilmActions } from "../../redux/FilmSlice/FilmAyscThunk";

const Home = () => {
  const dispatch = useAppDispatch();
  const Navigate = useNavigate()
  const value = useSelector((state: IRootState) => state.filmStateData.value);
  const handleTabClick =(path: To)=>{
    Navigate(path)
  }
  const increment = () => {
    dispatch(filmAction.increaseItems(2));
  };
  return (
    <div style={{ textAlign: "left", marginLeft: "60px", display: "flex"}}>
      <div className="listStyle">
        <li>
        {Strings.films}
          <div>
            <Link to="/films" onClick={()=>{
              handleTabClick("/films")
              dispatch(getFilmActions({id: 1}))
            }}>view</Link>
            <button onClick={increment}>+</button>
            <br />
            <h1>{value}</h1>
          </div>
        </li>
      </div>
      <div className="listStyle">
        <li>
          {Strings.starShips}
          <div>
            <Link to="/starship">view</Link>
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
