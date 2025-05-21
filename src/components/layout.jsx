import { getSystemInfo } from "zmp-sdk";
import {
  App,
  ZMPRouter,
  Route,
  SnackbarProvider,
} from "zmp-ui";

import HomePage from "../pages/index";

const Layout = () => {
  return (
    <App theme={getSystemInfo().zaloTheme}>
      <SnackbarProvider>
        <ZMPRouter>
          <Route path="/" element={<HomePage />} />
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};

export default Layout;
