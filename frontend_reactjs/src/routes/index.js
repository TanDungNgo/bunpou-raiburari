import Grammar from "~/pages/Grammar";
import Home from "~/pages/Home";
import ListKanji from "~/pages/ListKanji";
import Profile from "~/pages/Profile";
import Kanji from "~/pages/Kanji";

// Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
  { path: "/listkanji", component: ListKanji },
  { path: "/grammar", component: Grammar },
  { path: "kanji/:id", component: Kanji },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
