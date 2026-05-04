import "../../App.css";
import LockSymbol from "../LockSymbol";

function CardButton({ text, isLocked, link, isPrimary }) {
  let buttonColor = isPrimary ? "var(--primary-pink)" : "var(--text-color)";
  let textColor = isPrimary ? "var(--text-color)" : "var(--primary-purple)";
  return (
    <button
      {...(!isLocked && {
        onClick: () => alert("This feature is not available yet!"),
      })}
      style={{
        width: "100%",
        flex: 1,
        padding: isLocked ? "1px" : "8px 16px",
        fontSize: isPrimary ? "1.2rem" : "16px",
        fontVariationSettings: isPrimary
          ? "'wght' 1000, 'wdth' 151, 'slnt' 0, 'GRAD' 0, 'ROND' 40"
          : "'wght' 600, 'wdth' 100, 'slnt' 0, 'GRAD' 0, 'ROND' 100",
        borderRadius: "20px",
        border: "2px solid var(--purple-border)",
        backgroundColor: isLocked ? "var(--purple-border)" : buttonColor,
        color: isLocked ? "var(--text-color)" : textColor,
        fontFamily: "Google Sans Flex",
        cursor: isLocked ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!isLocked && text}
      {isLocked && (
        <LockSymbol
          insideColor={"var(--primary-purple)"}
          outsideColor={"var(--text-color)"}
          style={{ width: "2.5rem", margin: "0", rotate: "-10deg" }}
        />
      )}
    </button>
  );
}

export default CardButton;
