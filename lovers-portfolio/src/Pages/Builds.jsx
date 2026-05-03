import "../App.css";

function Builds() {
  return (
    <>
      <div className="centreSection">
        <div id="startingTextContainer">
          <h2
            style={{
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Sup!&nbsp;
            <span
              style={{
                color: "var(--primary-green)",
                fontVariationSettings:
                  "'wght' 500, 'slnt' 0, 'GRAD' 0, 'ROND' 100",
              }}
            >
              Here is some stuff I've built
            </span>
            .
          </h2>
          <h4
            style={{
              margin: 0,
            }}
          >
            A lot of content hasn't been added yet, either due to timing or
            privacy for
            <br /> the people I've worked with.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Builds;
