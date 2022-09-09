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
import HeaderOnly from "~/layouts/HeaderOnly/HeaderOnly";
import CreateCardKanji from "~/pages/Admin/CreateCardKanji/CreateCardKanji";
import CreateCardGrammar from "~/pages/Admin/CreateCardGrammar/CreateCardGrammar";
import SecondLayout from "~/layouts/SecondLayout/SecondLayout";
import Quiz from "~/components/Quiz/Quiz";
import EditCardGrammar from "~/pages/Admin/EditCardGrammar/EditCardGrammar";
import EditCardKanji from "~/pages/Admin/EditCardKanji/EditCardKanji";

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.listKanji, component: ListKanji },
  { path: config.routes.listGrammar, component: ListGrammar },
  { path: config.routes.kanji, component: Kanji },
  { path: config.routes.grammar, component: Grammar },
  { path: config.routes.quiz, component: QuizPage },
  { path: config.routes.bookmark, component: Bookmark },
  { path: config.routes.conservation, component: ConversationPage },
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.profile, component: Profile, layout: SecondLayout },
  {
    path: config.routes.createCardKanji,
    component: CreateCardKanji,
    layout: SecondLayout,
  },
  {
    path: config.routes.createCardGrammar,
    component: CreateCardGrammar,
    layout: SecondLayout,
  },
  {
    path: config.routes.quizKanji,
    component: Quiz,
    layout: HeaderOnly,
  },
  {
    path: config.routes.quizGrammar,
    component: Quiz,
    layout: HeaderOnly,
  },
  {
    path: config.routes.editCardGrammar,
    component: EditCardGrammar,
    layout: SecondLayout,
  },
  {
    path: config.routes.editCardKanji,
    component: EditCardKanji,
    layout: SecondLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
