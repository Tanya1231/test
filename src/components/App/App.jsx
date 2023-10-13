import { Route, Routes } from "react-router-dom";
import "../../index.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {



  return (
    <CurrentUserContext.Provider>
      <div className="page">
              <Header />
            <Routes>
              <Route path="/" element={<Main />}></Route>
            </Routes>
              <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
