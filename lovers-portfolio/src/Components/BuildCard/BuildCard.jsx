import "../../App.css";
import CardButton from "../ProjectCard/CardButton";

function BuildCard({ title, description, link, videoLink }) {
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "16/9",
              backgroundColor: "var(--purple-border)",
              borderRadius: "20px",
              border: "2px solid var(--purple-border)",
              position: "relative",
              overflow: "hidden",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            {videoLink ? (
              <video
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="noselect"
                src={videoLink}
                draggable={false}
              />
            ) : (
              <div
                className="scaleIn noselect"
                style={{
                  color: "var(--purple-border)",
                  textAlign: "center",
                }}
              >
                <h1>No video found</h1>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              flexDirection: "column",
              padding: "10px",
              width: "100%",
            }}
          >
            <h1
              className="nomargin"
              style={{
                fontVariationSettings:
                  '"wght" 500, "wdth" 50, "GRAD" 0, "slnt" -10, "ROND" 100',
              }}
            >
              {title}
            </h1>
            <p
              className="nomargin widthfit"
              style={{
                fontVariationSettings:
                  '"wght" 400, "wdth" 100, "GRAD" 0, "slnt" 0, "ROND" 100',
                textAlign: "left",
              }}
            >
              {description}
            </p>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <CardButton text={"Learn More →"} isPrimary={true} link={link} />
        </div>
      </div>
    </>
  );
}

export default BuildCard;
