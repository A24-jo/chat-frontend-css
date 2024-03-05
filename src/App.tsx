import "./App.css";
import Login from "./components/auth/login";
import Page_main from "./components/page_main";
import { Route, Routes } from "react-router-dom";
import Singoff from "./components/auth/singoff";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sinup" element={<Singoff />} />
        <Route path="/home" element={<Page_main />} />
      </Routes>
    </div>
  );
}

export default App;
