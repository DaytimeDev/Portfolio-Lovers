import "../App.css";

function LinkButton({ children, onClick, variant }) {
  const variantClass = variant ? `linkButton--${variant}` : "";

  return (
    <button
      className={`linkButton ${variantClass}`.trim()}
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "20px",
        fontVariationSettings:
          "'wght' 800, 'wdth' 100, 'slnt' 0, 'GRAD' 0, 'ROND' 40",
        border: "2px solid var(--purple-border)",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
      }}
    >
      {children}
      <span className="material-symbols-rounded">call_made</span>
    </button>
  );
}

export default LinkButton;
