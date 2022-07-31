import Home from "~/pages/Home";
import Profile from "~/pages/Profile";

// Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
