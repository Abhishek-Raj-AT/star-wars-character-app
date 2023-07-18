
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
          <Link to="">{Strings.starShips}</Link>
        </li>
        <li>
          <Link to="">{Strings.people}</Link>
        </li>
        <li>
          <Link to="">{Strings.vehicles}</Link>
        </li>
        <li>
          <Link to="">{Strings.species}</Link>
        </li>
        <li>
          <Link to="">{Strings.planets}</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  );
};
export default Layout;