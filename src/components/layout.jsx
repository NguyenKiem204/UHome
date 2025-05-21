import { getSystemInfo } from "zmp-sdk";
import {
  App,
  SnackbarProvider,
} from "zmp-ui";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/index";
import ProfilePage from "../pages/profile";
import FeedbackPage from "../pages/feedback";

const Layout = () => {
  return (
    <App theme={getSystemInfo().zaloTheme}>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage onBack={() => window.history.back()} />} />
              <Route path="/feedback" element={<FeedbackPage onBack={() => window.history.back()} />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </App>
  );
};

export default Layout;