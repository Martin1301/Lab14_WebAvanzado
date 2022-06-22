import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, AboutView } from "../pages";
import * as ROUTES from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomeView />} />
        <Route path={ROUTES.ABOUT} element={<AboutView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
