import "../App.css";

function TextGroup({ textTitle, titleColor, text }) {
  return (
    <>
      <div
        style={{
          width: "40%",
        }}
      >
        <h1
          className="marginLess"
          style={{ color: titleColor, fontSize: "1.3rem" }}
        >
          {textTitle}
        </h1>
        <p className="marginLess">{text}</p>
      </div>
    </>
  );
}

export default TextGroup;
