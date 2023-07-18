import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "../pages/Error/error404";
import Films from "../pages/Films";
import Layout from "../Layout";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
