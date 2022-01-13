import { Routes, Route } from "react-router-dom";
// import SeeMoreLeaderboard from "./components/EventDetails/SeeMoreLeaderBoard";
import SeeMoreLeaderboard from "./pages/SeeMoreLeaderBoard";
import SeeMoreDocumentation from "./components/EventDetails/SeeMoreDocumentation";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import DashboardEvents from "./pages/Dashboard/Events";
import DashboardIndex from "./pages/Dashboard/Index";
import DashboardLogin from "./pages/Dashboard/Login";
import DashboardUsers from "./pages/Dashboard/Users";
import Events from "./pages/Events";
import EventsDetail from "./pages/EventsDetail";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";
import Homex from "./pages/Homex";
import Tes from "./pages/Tes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/dashboard" element={<DashboardIndex />} />
      <Route exact path="/homex" element={<Homex />} />
      <Route exact path="/dashboard/login" element={<DashboardLogin />} />
      <Route exact path="/dashboard/users" element={<DashboardUsers />} />
      <Route exact path="/dashboard/events" element={<DashboardEvents />} />
      <Route exact path="/leaderboard" element={<Leaderboard />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/blog/:id" element={<BlogDetail />} />
      <Route exact path="/event" element={<Events />} />
      <Route exact path="/event/:id" element={<EventsDetail />} />
      <Route
        exact
        path="/event/:id/leaderboard"
        element={<SeeMoreLeaderboard />}
      />
      <Route
        exact
        path="/event/:id/documentation"
        element={<SeeMoreDocumentation />}
      />
      <Route exact path="/tes" element={<Tes />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
