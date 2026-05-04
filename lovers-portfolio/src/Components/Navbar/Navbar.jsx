import "../../App.css";
import NavButton from "./NavButton";

function Navbar({ currentPath, onNavigate }) {
  return (
    <div
      style={{
        display: "flex",
        position: "sticky",
        top: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "25px",
        width: "fit-content",
        backgroundColor: "var(--dark-transparent)",
        border: "2px solid var(--purple-border)",
        borderRadius: "100px",
        gap: ".4rem",
        padding: ".2rem",
        zIndex: 100,
        backdropFilter: "blur(10px)",
      }}
      className="navbar"
    >
      <NavButton
        title={"Home"}
        iconName={"home"}
        location="/home"
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <NavButton
        title={"Projects"}
        iconName={"work"}
        location="/projects"
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <NavButton
        title={"Builds"}
        iconName={"build"}
        location="/builds"
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <NavButton
        title={"Work With Me"}
        iconName={"partner_exchange"}
        location="/work-with-me"
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
    </div>
  );
}

export default Navbar;
