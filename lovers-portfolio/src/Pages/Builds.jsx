import "../App.css";

function Builds() {
  return (
    <>
      <div
        className="scaleIn"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          textAlign: "center",
          alignSelf: "stretch",
          padding: "20px",
          minHeight: "60vh",
        }}
      >
        <span
          className="material-symbols-rounded"
          style={{
            fontSize: "5rem",
            animation: "wave 10s linear infinite",
            color: "var(--primary-pink)",
          }}
        >
          build
        </span>
        <h1>
          My portfolio is in the works, this section hasn't quite been added
          yet...
        </h1>
      </div>
    </>
  );
}

export default Builds;
