import "../../App.css";

function NavButton({ title, iconName, location }) {
  const handleClick = () => {
    window.history.pushState({}, "", location);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  let highlighted = false;
  if (window.location.pathname.toLowerCase() === location.toLowerCase()) {
    highlighted = true;
  }
  if (
    window.location.pathname.toLowerCase() === "/" &&
    location.toLowerCase() === "/home"
  ) {
    // Highlight "Home" when on the root path
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
        class="material-symbols-rounded"
      >
        {iconName}
      </span>
      {title}
    </button>
  );
}

export default NavButton;
