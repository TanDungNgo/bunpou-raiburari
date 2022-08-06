import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";
import Kanji from "./pages/Kanji";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
          <Route path="/kanji" element={
                  <DefaultLayout>
                    <Kanji />
                  </DefaultLayout>
                }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
