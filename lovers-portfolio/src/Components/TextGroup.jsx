import "../App.css";

function TextGroup({ textTitle, titleColor, text }) {
  return (
    <>
      <div
        className="hundredPercentOnMobile"
        style={{
          width: "40%",
        }}
      >
        <h1
          className="nomargin"
          style={{ color: titleColor, fontSize: "1.3rem" }}
        >
          {textTitle}
        </h1>
        <p className="nomargin">{text}</p>
      </div>
    </>
  );
}

export default TextGroup;
