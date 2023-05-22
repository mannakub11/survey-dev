import { Route, Routes as RoutesLib } from "react-router-dom";

import * as paths from "../constants/paths";

import MainLayout from "../components/Layout/MainLayout";
import Finish from "../pages/Finish";
import Home from "../pages/Home";
import EmptyLayout from "../components/Layout/EmptyLayout";

export const Routes = () => {
  return (
    <RoutesLib>
      <Route element={<MainLayout component={Home} />} path={paths.home()} />
      <Route
        element={<EmptyLayout component={Finish} />}
        path={paths.finish()}
      />
    </RoutesLib>
  );
};

export default Routes;
