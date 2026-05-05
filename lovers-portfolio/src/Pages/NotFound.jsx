import "../App.css";
import Train from "../Components/Icons/Train";

function NotFound() {
  const pageUrl = window.location.pathname;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <h1
          style={{
            fontSize: "5rem",
            color: "var(--primary-pink)",
            fontVariationSettings: "'wght' 900, 'slnt' 0, 'GRAD' 0, 'ROND' 100",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontVariationSettings:
              "'wght' 700, 'slnt' -10, 'GRAD' 0, 'ROND' 100",
            color: "var(--text-color)",
          }}
        >
          Awww.... That page doesn't seem to exist.
        </h2>
        <h3 style={{ color: "#b1b1b1", marginTop: "4px", marginBottom: "0" }}>
          {pageUrl}
        </h3>

        <svg
          style={{
            marginTop: "10px",
          }}
          className="scaleSpawn"
          xmlns="http://www.w3.org/2000/svg"
          height="100px"
          viewBox="0 -960 960 960"
          width="100px"
          fill="var(--primary-pink)"
        >
          <path d="M425.5-84.5Q401-94 383-112 274-215 203-290.5t-113-134Q48-483 31-531t-17-97q0-106 72.5-181T263-884q79 0 140.5 35.5T455-748l-21 158q-3 17 8.5 30.5T470-546h46l-22 214q-1 7 6.5 8.5t9.5-5.5l52-217q5-16-6-30t-28-14h-48l47-200q13-51 63.5-72.5T697-884q104 0 176.5 75T946-628q0 46-18 94.5t-61.5 108q-43.5 59.5-116 136T569-111q-19 18-42.5 27t-50 9q-26.5 0-51-9.5Z" />
        </svg>
        <Train
          className="scaleIn leftToRightTrain"
          style={{
            position: "fixed",
            bottom: "0.5%",
            left: `0%`,
            transition: "all 20s linear",
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </>
  );
}

export default NotFound;
