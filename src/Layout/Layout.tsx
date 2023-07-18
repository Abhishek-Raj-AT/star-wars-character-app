import { Link, Outlet, To, useNavigate } from "react-router-dom";
import { Strings } from "../resource/Strings";
import { useAppDispatch } from "../redux/store";
import { getFilmActions } from "../redux/FilmSlice/FilmAyscThunk";

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
              handleTabClick("/");
              dispatch(getFilmActions({ id: 1 }));
            }}
          >
            {Strings.films}
          </Link>
        </li>
        <li>
          <Link to="/starship">{Strings.starShips}</Link>
        </li>
        <li>
          <Link to="/people">{Strings.people}</Link>
        </li>
        <li>
          <Link to="/vehicle">{Strings.vehicles}</Link>
        </li>
        <li>
          <Link to="/species">{Strings.species}</Link>
        </li>
        <li>
          <Link to="/planets">{Strings.planets}</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default Layout;
