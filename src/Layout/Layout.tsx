
import { Link, Outlet } from "react-router-dom";
import { Strings } from "../resource/Strings";

const Layout = () => {
  return (
    <>
      <ul style={{display:"flex", listStyle: "none", gap: "30px"}}>
        <li>
          <Link to="">{Strings.home}</Link>
        </li>
        <li>
          <Link to="/films">{Strings.films}</Link>
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
      <Outlet/>
    </>
  );
};
export default Layout;