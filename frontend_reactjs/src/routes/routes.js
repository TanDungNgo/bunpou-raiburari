import config from "~/config";

import Grammar from "~/pages/Grammar/Grammar";
import Home from "~/pages/Home/Home";
import ListKanji from "~/pages/ListKanji/ListKanji";
import Profile from "~/pages/Profile/Profile";
import Kanji from "~/pages/Kanji/Kanji";
import ListGrammar from "~/pages/ListGrammar/ListGrammar";
import Login from "~/pages/Login/Login";
import Bookmark from "~/pages/Bookmark/Bookmark";
import QuizPage from "~/pages/QuizPage/QuizPage";
import ConversationPage from "~/pages/ConversationPage/ConversationPage";

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.listKanji, component: ListKanji },
  { path: config.routes.listGrammar, component: ListGrammar },
  { path: config.routes.kanji, component: Kanji },
  { path: config.routes.grammar, component: Grammar },
  { path: config.routes.quiz, component: QuizPage },
  { path: config.routes.bookmark, component: Bookmark },
  { path: config.routes.conservation, component: ConversationPage },
  { path: config.routes.login, component: Login, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
