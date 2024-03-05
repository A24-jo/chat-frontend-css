import { useEffect, useState } from "react";
import "../style/page_main.css";
import Main from "./main";
import Nav from "./nav";
import Sidebar from "./sidebar";
import { IsSessions } from "../service/isSessions";
import { NavigateFunction, useNavigate } from "react-router-dom";

function Page_main() {
  const data = IsSessions();
  const navidate: NavigateFunction = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!data) {
      navidate("/");
    } else {
      const tiemoutId = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(tiemoutId);
    }
  }, [data, navidate]);

  if (isLoading) {
    return (
      <div className="page_main_container">
        <div className="page_main_spinner">
          <div className="page_main_spinner1"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <header className="header">chatsting</header>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <article className="main">
        <Main />
      </article>
      <nav className="nav">
        <Nav />
      </nav>
    </div>
  );
}

export default Page_main;
