import "../App.css";

function SideBySideLoader({ backgroundColor, foregroundColor }) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor || "var(--primary-pink)",
        width: "100%",
        minWidth: "100px",
        height: "10px",
        borderRadius: "50px",
        padding: "5px",
      }}
    >
      <div
        className="loaderInside"
        style={{
          backgroundColor: foregroundColor || "var(--primary-purple)",
          width: "50%",
          height: "10px",
          borderRadius: "50px",
        }}
      ></div>
    </div>
  );
}

export default SideBySideLoader;
