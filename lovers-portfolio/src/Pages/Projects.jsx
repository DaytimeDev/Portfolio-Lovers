import "../App.css";
import ProjectCard from "../Components/ProjectCard/ProjectCard";

function Projects() {
  return (
    <>
      <div className="centreSection">
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
              color: "var(--primary-purple)",
              fontVariationSettings:
                "'wght' 700, 'slnt' 0, 'GRAD' 0, 'ROND' 100",
              textShadow:
                "-1px -1px 0 var(--text-color), 1px -1px 0 var(--text-color), -1px 1px 0 var(--text-color), 1px 1px 0 var(--text-color)",
            }}
          >
            Projects
          </h1>
          <h4
            style={{
              margin: 0,
              color: "var(--primary-pink)",
            }}
          >
            Disclaimer: All the stuff you see is spoken to about with the
            highest extend I am able to.
          </h4>
        </div>
        <div
          className="projectsList"
          style={{
            gap: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <ProjectCard
            title="Mine-It!"
            description="My first commissioned game - I was the lead programmer and project development lead."
            link="/mine-it"
            gameLink="/game1"
            imageLink="https://tr.rbxcdn.com/180DAY-8e78eedea5b8a104470be45d8ed18108/768/432/Image/Webp/noFilter"
          />
          <ProjectCard
            title={"Redacted Title"}
            description="Lead scripter for a story game using custom complex camera systems and animation systems."
            link="/redacted1"
            imageOverlayText="Content Hidden"
            isLocked={true}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
