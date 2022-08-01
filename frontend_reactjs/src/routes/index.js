import Grammar from "~/pages/Grammar";
import Home from "~/pages/Home";
import Kanji from "~/pages/Kanji";
import Profile from "~/pages/Profile";

// Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
  { path: "/kanji", component: Kanji },
  { path: "/grammar", component: Grammar },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
