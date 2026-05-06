import "../App.css";
import BuildCard from "../Components/BuildCard/BuildCard";
import builds from "../data/builds";

function Builds() {
  return (
    <>
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
            fontVariationSettings: "'wght' 800, 'slnt' 0, 'GRAD' 0, 'ROND' 100",
          }}
        >
          <span
            style={{
              fontVariationSettings:
                "'wght' 500, 'wdth' 0, 'slnt' -10, 'GRAD' 0, 'ROND' 100",
            }}
          >
            Recent & Cool
          </span>
          &nbsp;Builds
        </h1>
        <h4
          style={{
            margin: 0,
            color: "var(--primary-pink)",
            fontVariationSettings:
              "'wght' 500, 'wdth' 100, 'slnt' 10, 'GRAD' 0, 'ROND' 100",
          }}
        >
          Here is some example stuff I've built for fun and work as demos
          lately!
        </h4>
      </div>
      <div
        className="scaleIn"
        style={{
          gap: "20px",
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {builds.map((build) => (
          <BuildCard
            key={build.slug}
            link={"/builds/" + build.slug}
            title={build.title}
            description={build.description}
            videoLink={build.videoLink}
          />
        ))}
      </div>
    </>
  );
}

export default Builds;
