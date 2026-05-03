import "../../App.css";
import NavButton from "./NavButton";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        position: "sticky",
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
      }}
      className="navbar"
    >
      <NavButton title={"Home"} iconName={"home"} location="/home" />
      <NavButton title={"Projects"} iconName={"work"} location="/projects" />
      <NavButton title={"Builds"} iconName={"build"} location="/builds" />
      <NavButton
        title={"Work With Me"}
        iconName={"partner_exchange"}
        location="/work-with-me"
      />
    </div>
  );
}

export default Navbar;
