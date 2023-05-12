import { Route, Routes as RoutesLib } from "react-router-dom";
import Home from "../pages/Home";

import * as paths from "../constants/paths";
import Finish from "../pages/Finish";

export const Routes = () => {
  return (
    <RoutesLib>
      <Route path={paths.home()} element={<Home />} errorElement={<Home />} />
      <Route
        path={paths.finish()}
        element={<Finish />}
        errorElement={<Home />}
      />
    </RoutesLib>
  );
};

export default Routes;
