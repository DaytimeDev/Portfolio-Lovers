import "../../App.css";

function NavButton({ title, iconName, location, currentPath, onNavigate }) {
  const handleClick = () => {
    onNavigate(location);
  };

  let highlighted = false;
  if (currentPath === location.toLowerCase()) {
    highlighted = true;
  }
  if (currentPath === "/" && location.toLowerCase() === "/home") {
    // Highlight "Home" when on the root path
    highlighted = true;
  }
  if (
    location.toLowerCase() === "/projects" &&
    currentPath.startsWith("/projects")
  ) {
    highlighted = true;
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: highlighted
          ? "var(--primary-purple)"
          : "var(--accent-blue)",
        fontVariationSettings: "'wght' 700, 'slnt' 0, 'GRAD' 0, 'ROND' 0",
        fontSize: "0.7rem",
        padding: "0.32rem 1.2rem",
        borderRadius: "100px ",
        color: "var(--text-color)",
        border: "none",
        minHeight: "40px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="borderHover navButton"
    >
      <span
        style={{
          margin: 0,
        }}
        className="material-symbols-rounded"
      >
        {iconName}
      </span>
      {title}
    </button>
  );
}

export default NavButton;
