import "../App.css";

function ILOVECATS() {
  return (
    <>
      <img
        style={{
          width: "120px",
          aspectRatio: "1 / 1",
          margin: "20px",
          position: "fixed",
          bottom: "0",
          left: "0",
        }}
        draggable={false}
        className="noselect"
        src="/ILOVECATS.svg"
        alt="A heart with the words I LOVE CATS traced around it"
      />
    </>
  );
}

export default ILOVECATS;
