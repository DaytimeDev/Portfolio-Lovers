import "../App.css";
import SideBySideLoader from "./SideBySideLoader";

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
            color: "var(--text-color)",
            fontVariationSettings: "'wght' 900, 'slnt' 0, 'GRAD' 0, 'ROND' 100",
          }}
          className="nomargin fadeColor"
        >
          {stat === "-----" ? (
            <div
              style={{
                display: "inline-block",
                position: "relative",
                textAlign: "center",
                width: "fit-content",
              }}
            >
              <span style={{ display: "inline-block", zIndex: 0 }}>⠀</span>
              <span
                style={{
                  position: "absolute",
                  left: "120%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              >
                <SideBySideLoader
                  backgroundColor={"var(--primary-purple)"}
                  foregroundColor={"var(--text-color)"}
                />
              </span>
            </div>
          ) : (
            stat
          )}
        </h1>
        <p
          className="nomargin"
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
