import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "App.css";
import Home from "components/Home";
import SearchProvider from "context/SearchContext";
import Gifs from "pages/Gifs";
import Error404 from "components/Error404";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <SearchProvider>
          <Router>
            <Routes>
              <Route index element={<Home />} />
              <Route path="search/:keyword" element={<Gifs />}></Route>
              <Route path="trending/:title"></Route>
              <Route path="*" element={<Error404 />}></Route>
            </Routes>
          </Router>
        </SearchProvider>
      </div>
    </div>
  );
}

export default App;
