import "../App.css";
import Divider from "../Components/Divider";
import LockSymbol from "../Components/LockSymbol";
import CardButton from "../Components/ProjectCard/CardButton";
import projects from "../data/projects";
import NotFound from "./NotFound";

function ProjectDetail() {
  const slug = window.location.pathname.split("/")[2] || "project";
  const project = projects.find((entry) => entry.slug === slug);

  return (
    <>
      {project && (
        <>
          <div className="centreSection scaleIn">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <button
                className="ghostButton"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "var(--primary-pink)",
                  fontFamily: "inherit",
                  fontVariationSettings:
                    "'wght' 700, 'slnt' -10, 'GRAD' 0, 'ROND' 100",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  transition: "all 0.1s ease",
                }}
                onClick={() => window.history.back()}
              >
                ← Back
              </button>
              <div
                className="imageContainer hundredPercentOnMobile"
                style={{
                  width: "30vw",
                  aspectRatio: "16/9",
                  backgroundColor: "var(--purple-border)",
                  borderRadius: "20px",
                  border: "2px solid var(--purple-border)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {project.isLocked && (
                  <LockSymbol
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      width: "2.5rem",
                      rotate: "-10deg",
                      zIndex: 1,
                    }}
                    insideColor={"var(--primary-purple)"}
                    outsideColor={"var(--text-color)"}
                  />
                )}
                {project.imageLink && (
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: project.isLocked
                        ? "grayscale(60%) blur(15px)"
                        : "none",
                    }}
                    className="noselect"
                    draggable={false}
                    src={project.imageLink}
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
                  {project.imageOverlayText}
                </h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <h1
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "var(--primary-pink)",
                    fontFamily: project.isLocked ? "Redacted" : "inherit",
                    fontVariationSettings:
                      "'wght' 1000, 'wdth' 151, 'slnt' -10, 'GRAD' 0, 'ROND' 100",
                  }}
                >
                  {project.title}
                </h1>
              </div>
              <div
                className="hundredPercentOnMobile"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  maxWidth: "700px",
                  textAlign: "center",
                }}
              >
                {project ? (
                  <>
                    <div
                      className="hundredPercentOnMobile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        gap: "8px",
                      }}
                    >
                      {project.details?.map((detail) => (
                        <p
                          key={detail}
                          style={{
                            maxWidth: "30vw",
                            textAlign: "start",
                          }}
                          className="nomargin hundredPercentOnMobile"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="nomargin">That project could not be found.</p>
                )}
              </div>
              <Divider />
              <h2>Status</h2>
              <p className={`nomargin detailStat ${"status" + project.status}`}>
                {project.status}
              </p>
              <br />
              <h2>Role</h2>
              <p
                className="nomargin detailStat"
                style={{ color: "var(--primary-pink)" }}
              >
                {project.role}
              </p>
              <Divider />
              <CardButton
                text={"Play"}
                isLocked={project.isLocked}
                isPrimary={true}
                link={project.gameLink}
              />
            </div>
          </div>
        </>
      )}
      {!project && <NotFound />}
    </>
  );
}

export default ProjectDetail;
