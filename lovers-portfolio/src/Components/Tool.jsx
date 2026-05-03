import "../App.css";

function Tool({ name, iconSrc }) {
  return (
    <div
      className="tool"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        /* keep a 1:1 square and center content */
        width: "50px",
        height: "50px",
        aspectRatio: "1 / 1",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <img
        style={{
          width: "50px",
          height: "50px",
          objectFit: "contain",
          borderRadius: "5px",
        }}
        draggable={false}
        className="noselect"
        src={iconSrc}
        alt={name}
      />
      <h4
        style={{
          fontSize: "0.8rem",
          marginTop: "5px",
        }}
        className="nomargin"
      ></h4>
    </div>
  );
}

export default Tool;
