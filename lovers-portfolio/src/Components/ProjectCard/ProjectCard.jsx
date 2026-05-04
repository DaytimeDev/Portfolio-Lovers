import "../../App.css";
import LockSymbol from "../LockSymbol";
import CardButton from "./CardButton";

function ProjectCard({
  title,
  description,
  infoLink,
  gameLink,
  imageOverlayText,
  isLocked,
  imageLink,
}) {
  return (
    <>
      <div
        className="scaleIn"
        style={{
          backgroundColor: "var(--primary-purple)",
          borderRadius: "25px",
          padding: "10px",
          border: "2px solid var(--purple-border)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "fit-content",
          transition: "all 0.2s ease-in-out",
          minWidth: "250px",
          maxWidth: "300px",
          gap: "5px",
          position: "relative",
        }}
      >
        <div>
          <div
            className="imageContainer"
            style={{
              width: "100%",
              aspectRatio: "16/9",
              backgroundColor: "var(--purple-border)",
              borderRadius: "20px",
              border: "2px solid var(--purple-border)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {imageLink && (
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: isLocked ? "grayscale(60%) blur(10px)" : "none",
                }}
                className="noselect"
                draggable={false}
                src={imageLink}
                alt=""
              />
            )}
            <h1
              className="noselect"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                margin: 0,
                width: "100%",
                textAlign: "center",
                color: "var(--text-color)",
                fontVariationSettings:
                  "'wght' 900, 'slnt' 0, 'GRAD' 0, 'ROND' 100",
              }}
            >
              {imageOverlayText}
            </h1>
          </div>
          <div
            className="cardText"
            style={{ textAlign: "start", width: "100%", marginTop: "10px" }}
          >
            <h1
              style={{
                fontSize: "1.6rem",
                margin: 0,
                fontFamily: isLocked ? "Redacted" : "Google Sans Flex",
                fontVariationSettings:
                  "'wght' 1000, 'wdth' 151, 'slnt' -10, 'GRAD' 0, 'ROND' 100",
              }}
            >
              {title}
            </h1>
            <p className="nomargin">{description}</p>
          </div>
        </div>
        <div
          className="projectCardButtons"
          style={{
            display: "flex",
            width: "100%",
            gap: "10px",
            alignItems: "stretch",
          }}
        >
          <CardButton
            text={"Play"}
            isPrimary={true}
            isLocked={isLocked}
            link={gameLink}
          />
          <CardButton text={"More →"} link={infoLink} />
        </div>
        {isLocked && (
          <LockSymbol
            insideColor={"var(--primary-pink)"}
            outsideColor={"var(--text-color)"}
            style={{
              width: "3rem",
              position: "absolute",
              top: "-15px",
              right: "-15px",
              rotate: "-20deg",
            }}
          />
        )}
      </div>
    </>
  );
}

export default ProjectCard;
