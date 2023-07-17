import { Link } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { filmAction } from "../../redux/FilmSlice/FilmSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const value = useSelector((state: IRootState) => state.filmStateData.value);
  const increment = () => {
    dispatch(filmAction.increaseItems(2));
  };
  return (
    <div style={{ textAlign: "left", marginLeft: "60px" }}>
      <div>
        <li>
          Films
          <div>
            <Link to="/films">view</Link>
            <button onClick={increment}>+</button>
            <br />
            <h1>{value}</h1>
          </div>
        </li>
      </div>
    </div>
  );
};
export default Home;
