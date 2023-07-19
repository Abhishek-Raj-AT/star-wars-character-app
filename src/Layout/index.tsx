import { Link, Outlet, To, useNavigate } from "react-router-dom";
import { Strings } from "../resource/Strings";
import { useAppDispatch } from "../redux/store";
import { getFilmActions } from "../redux/FilmSlice/FilmAyscThunk";
import { getStarshipActions } from "../redux/StarshipSlice/StarshipAyscThunk";
import { getPeopleActions } from "../redux/PeopleSlice/PeopleAyscThunk";
import { getPlanetActions } from "../redux/PlanetsSlice/PlanetAyscThunk";
import { getVehicleActions } from "../redux/VehicleSlice/VehicleAyscThnk";
import { getSpeciesActions } from "../redux/SpeciesSlice/SpeciesAyscThunk";

const Layout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleTabClick = (path: To) => {
    navigate(path);
  };
  return (
    <>
      <ul style={{ display: "flex", listStyle: "none", gap: "30px" }}>
        <li>
          <Link to="/" onClick={() => handleTabClick("/")}>
            {Strings.home}
          </Link>
        </li>
        <li>
          <Link
            to="/films"
            onClick={() => {
              handleTabClick("/films");
              dispatch(getFilmActions({ id: 1 }));
            }}
          >
            {Strings.films}
          </Link>
        </li>
        <li>
          <Link
            to="/starship"
            onClick={() => {
              handleTabClick("/starship");
              dispatch(
                getStarshipActions({
                  id: 1,
                })
              );
            }}
          >
            {Strings.starShips}
          </Link>
        </li>
        <li>
          <Link
            to="/people"
            onClick={() => {
              handleTabClick("/people");
              dispatch(
                getPeopleActions({
                  id: 1,
                })
              );
            }}
          >
            {Strings.people}
          </Link>
        </li>
        <li>
          <Link
            to="/vehicle"
            onClick={() => {
              handleTabClick("/vehicle");
              dispatch(
                getVehicleActions({
                  id: 1,
                })
              );
            }}
          >
            {Strings.vehicles}
          </Link>
        </li>
        <li>
          <Link
            to="/species"
            onClick={() => {
              handleTabClick("/species");
              dispatch(
                getSpeciesActions({
                  id: 1,
                })
              );
            }}
          >
            {Strings.species}
          </Link>
        </li>
        <li>
          <Link
            to="/planets"
            onClick={() => {
              handleTabClick("/planets");
              dispatch(getPlanetActions({ id: 1 }));
            }}
          >
            {Strings.planets}
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default Layout;
