import "../App.css";
import ProjectCard from "../Components/ProjectCard/ProjectCard";
import projects from "../data/projects";

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
                "'wght' 1000, 'slnt' 0, 'GRAD' 0, 'ROND' 100",
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
              fontVariationSettings:
                "'wght' 500, 'wdth' 100, 'slnt' 10, 'GRAD' 0, 'ROND' 100",
            }}
          >
            Disclaimer: All of the projects below are ones I am allowed to talk
            about,
            <br />
            some of which have lots of redacted content.
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
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              infoLink={project.infoLink}
              gameLink={project.gameLink}
              imageLink={project.imageLink}
              imageOverlayText={project.imageOverlayText}
              isLocked={project.isLocked}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
