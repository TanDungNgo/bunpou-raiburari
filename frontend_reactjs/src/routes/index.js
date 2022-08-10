import routeConfig from "~/config/routes"

import Grammar from "~/pages/Grammar";
import Home from "~/pages/Home";
import ListKanji from "~/pages/ListKanji";
import Profile from "~/pages/Profile";
import Kanji from "~/pages/Kanji";
import ListGrammar from "~/pages/ListGrammar";

// Public routes
const publicRoutes = [
  { path: routeConfig.home, component: Home },
  { path: routeConfig.profile, component: Profile },
  { path: routeConfig.listKanji, component: ListKanji },
  { path: routeConfig.listGrammar, component: ListGrammar },
  { path: routeConfig.kanji, component: Kanji },
  { path: routeConfig.grammar, component: Grammar},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
