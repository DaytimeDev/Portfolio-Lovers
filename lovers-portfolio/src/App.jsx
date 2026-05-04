import "./App.css";
import { useState, useEffect } from "react";
import HeartSymbol from "./Components/HeartSymbol";
import ILOVECATS from "./Components/ILOVECATS";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Pages/Landing";
import NotFound from "./Pages/NotFound";
import WorkWithMe from "./Pages/WorkWithMe";
import Builds from "./Pages/Builds";
import Projects from "./Pages/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    let page = window.location.pathname.split("/")[1].toLowerCase();
    return page === "" ? "home" : page;
  });

  useEffect(() => {
    const handlePopState = () => {
      let page = window.location.pathname.split("/")[1].toLowerCase();
      setCurrentPage(page === "" ? "home" : page);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <>
      <Navbar />
      {(() => {
        switch (currentPage) {
          case "home":
            return <Landing />;
          case "builds":
            return <Builds />;
          case "projects":
            return <Projects />;
          case "work-with-me":
            return <WorkWithMe />;
          default:
            return <NotFound />;
        }
      })()}
      <ILOVECATS />
      <HeartSymbol
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          margin: "20px",
          width: "80px",
          transform: "rotate(20deg)",
        }}
        insideColor={"var(--primary-purple)"}
        outsideColor={"var(--primary-green)"}
      />
    </>
  );
}

export default App;
