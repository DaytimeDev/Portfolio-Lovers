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
import ProjectDetail from "./Pages/ProjectDetail";

function App() {
  const [currentPath, setCurrentPath] = useState(() =>
    window.location.pathname.toLowerCase(),
  );

  const navigateTo = (path) => {
    const nextPath = path.toLowerCase();

    if (window.location.pathname.toLowerCase() !== nextPath) {
      window.history.pushState({}, "", nextPath);
    }

    setCurrentPath(nextPath);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname.toLowerCase());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const normalizedPath = currentPath || "/";
  const firstSegment = normalizedPath.split("/")[1] || "home";
  const activePage = firstSegment === "" ? "home" : firstSegment;

  return (
    <>
      <Navbar currentPath={normalizedPath} onNavigate={navigateTo} />
      {(() => {
        switch (activePage) {
          case "home":
            return <Landing />;
          case "builds":
            return <Builds />;
          case "projects":
            return normalizedPath.split("/").filter(Boolean).length > 1 ? (
              <ProjectDetail />
            ) : (
              <Projects />
            );
          case "work-with-me":
            return <WorkWithMe />;
          default:
            return <NotFound />;
        }
      })()}
      <div className="PCOnly">
        <ILOVECATS />
        <HeartSymbol
          style={{
            position: "fixed",
            bottom: "0",
            right: "0",
            margin: "20px",
            width: "80px",
            transform: "rotate(20deg)",
          }}
          insideColor={"var(--primary-purple)"}
          outsideColor={"var(--primary-green)"}
        />
      </div>
    </>
  );
}

export default App;
