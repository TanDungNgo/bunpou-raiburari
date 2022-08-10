import config from "~/config";

import Grammar from "~/pages/Grammar";
import Home from "~/pages/Home";
import ListKanji from "~/pages/ListKanji";
import Profile from "~/pages/Profile";
import Kanji from "~/pages/Kanji";
import ListGrammar from "~/pages/ListGrammar";

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.listKanji, component: ListKanji },
  { path: config.routes.listGrammar, component: ListGrammar },
  { path: config.routes.kanji, component: Kanji },
  { path: config.routes.grammar, component: Grammar},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
