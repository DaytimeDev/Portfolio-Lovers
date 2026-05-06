export default function TabSwitch({ children }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "var(--primary-purple)",
        borderRadius: "30px",
        padding: "2px",
        width: "fit-content",
        border: "2px solid var(--purple-border)",
      }}
    >
      {children}
    </div>
  );
}
