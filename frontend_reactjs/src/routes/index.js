import routeConfig from "~/config/routes"

import Grammar from "~/pages/Grammar";
import Home from "~/pages/Home";
import ListKanji from "~/pages/ListKanji";
import Profile from "~/pages/Profile";
import Kanji from "~/pages/Kanji";

// Public routes
const publicRoutes = [
  { path: routeConfig.home, component: Home },
  { path: routeConfig.profile, component: Profile },
  { path: routeConfig.listKanji, component: ListKanji },
  { path: routeConfig.listGrammar, component: Grammar },
  { path: routeConfig.kanji, component: Kanji },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
