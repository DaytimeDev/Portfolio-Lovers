export default function TabButton({
  iconName,
  text,
  isActive,
  isDisabled,
  onClick,
}) {
  return (
    <div
      onClick={isDisabled ? undefined : onClick}
      className={isDisabled ? "noselect" : "borderHover noselect"}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isActive
          ? "var(--primary-pink)"
          : "var(--primary-purple)",
        borderRadius: "25px",
        padding: "2px 10px",
        width: "fit-content",
        border: isActive
          ? "2px solid var(--purple-border)"
          : "2px solid var(--primary-purple)",
        opacity: isDisabled ? 0.4 : 1,
        cursor: isDisabled ? "default" : "pointer",
        transition: "all .2s ease",
      }}
    >
      {iconName && (
        <span
          className="material-symbols-rounded nomargin"
          style={{
            fontSize: "1.2rem",
          }}
        >
          {iconName}
        </span>
      )}
      {text && (
        <span
          className="nomargin"
          style={{
            fontSize: "0.8rem",
            fontVariationSettings:
              "'wght' 700, 'wdth' 151, 'slnt' 0, 'GRAD' 0, 'ROND' 0",
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
}
