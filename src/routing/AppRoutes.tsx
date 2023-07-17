import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "../pages/Error/error404";
import Films from "../pages/Films";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import StarShips from "../pages/StarShips";
import People from "../pages/People";
import Vehicle from "../pages/Vehicle";
import Species from "../pages/Species";
import Planets from "../pages/Planets";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/starship" element={<StarShips />} />
          <Route path="/people" element={<People />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/species" element={<Species />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
