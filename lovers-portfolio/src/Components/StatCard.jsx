import "../App.css";

function StatCard({ stat, description, children }) {
  return (
    <>
      <div
        className="statCard squircle noselect"
        style={{
          backgroundColor: "var(--primary-purple)",
          borderRadius: "20px",
          padding: "10px",
          border: "2px solid var(--purple-border)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          width: "fit-content",
          transition: "all 0.2s ease-in-out",
        }}
      >
        {children ? (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(40%, -40%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            {children}
          </div>
        ) : null}
        <h1
          style={{
            fontSize: "4rem",
            color:
              stat === "-----" ? "var(--primary-purple)" : "var(--text-color)",
            fontVariationSettings: "'wght' 900, 'slnt' 0, 'GRAD' 0, 'ROND' 100",
          }}
          className="marginLess fadeColor"
        >
          {stat}
        </h1>
        <p
          className="marginLess"
          style={{
            fontSize: "1.2rem",
            color: "var(--purple-light)",
            fontVariationSettings: "'wght' 500, 'slnt' 0, 'GRAD' 0, 'ROND' 0",
          }}
        >
          {description}
        </p>
      </div>
    </>
  );
}

export default StatCard;
