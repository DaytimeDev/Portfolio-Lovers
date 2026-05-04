import "../App.css";
import { useEffect, useState } from "react";
import StatCard from "../Components/StatCard";
import TextGroup from "../Components/TextGroup";
import gatherVisitCount from "../StatGatherer";
import HeartSymbol from "../Components/HeartSymbol";

function formatVisitCount(visits) {
  if (visits >= 1_000_000_000) {
    return `${formatCompact(visits / 1_000_000_000)}B+`;
  }

  if (visits >= 1_000_000) {
    return `${formatCompact(visits / 1_000_000)}M+`;
  }

  if (visits >= 1_000) {
    return `${formatCompact(visits / 1_000)}K+`;
  }

  return `${visits}`;
}

function formatCompact(value) {
  const rounded = Math.round(value * 10000) / 10000;

  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function Landing() {
  const [visitCount, setVisitCount] = useState("...");

  useEffect(() => {
    let isActive = true;

    async function loadVisitCount() {
      try {
        let totalVisits = 0;
        totalVisits += await gatherVisitCount(9808843411); // Mine-It

        if (isActive && typeof totalVisits === "number") {
          setVisitCount(formatVisitCount(totalVisits));
        }
      } catch (error) {
        console.error("Unable to load visit count", error);
        if (isActive) setVisitCount("0");
      }
    }

    loadVisitCount();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <>
      <div className="centreSection">
        <div id="startingTextContainer">
          <h2
            style={{
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Hey! I'm&nbsp;
            <span
              style={{
                color: "var(--primary-green)",
                fontVariationSettings:
                  "'wght' 900, 'slnt' 0, 'GRAD' 0, 'ROND' 0",
              }}
            >
              Michael
            </span>
            .
            <span
              style={{
                marginLeft: "10px",
              }}
              className="material-symbols-rounded wave noselect"
            >
              front_hand
            </span>
          </h2>
          <h1>
            A Roblox developer who codes with{" "}
            <span
              style={{
                color: "var(--primary-pink)",
                fontVariationSettings:
                  "'wght' 900, 'slnt' -10, 'GRAD' 0, 'ROND' 100",
              }}
            >
              passion
            </span>
            .
          </h1>
        </div>
        <div id="statList" className="scaleIn">
          <div className="statRow">
            <StatCard
              stat={"5+ Years"}
              description={"Programming Experience"}
            />
            <StatCard
              stat={visitCount}
              description={<span>Public Visits Since 2026 🎉</span>}
            >
              <HeartSymbol
                style={{
                  width: "40px",
                  top: "5px",
                  right: "5px",
                  transform: "rotate(20deg)",
                }}
                scaleOnSpawn={true}
                strokeWidth={30}
                insideColor={"var(--primary-pink)"}
                outsideColor={"white"}
              />
            </StatCard>
          </div>
          <div className="statRow">
            <StatCard stat={"OOP"} description={"Experienced"} />
            <StatCard stat={"20K+"} description={"Lines in just one month"} />
            <StatCard stat={"UK"} description={"Based"} />
          </div>
        </div>
        <TextGroup
          textTitle={"Fun Fact"}
          titleColor={"var(--primary-green)"}
          text={
            <span>
              I don’t just code Roblox games, I can also make websites, AI’s &
              apps, all using knowledge I have gained over the years. I even
              made this website myself 👀
              <br />I have experience in design, coding, project management +
              more
            </span>
          }
        />
        <TextGroup
          textTitle={
            <span>
              Top Traits
              <HeartSymbol
                style={{
                  height: "20px",
                  marginLeft: "10px",
                  transform: "rotate(20deg)",
                }}
                strokeWidth={"30"}
                insideColor={"var(--primary-purple)"}
                outsideColor={"var(--primary-pink)"}
              />
            </span>
          }
          titleColor={"var(--primary-pink)"}
          text={
            <span
              style={{
                fontSize: "1.2rem",
                fontVariationSettings:
                  "'wght' 600, 'slnt' 0, 'GRAD' 0, 'ROND' 100",
              }}
            >
              Friendly
              <br />
              Smart
              <br />
              Caring
              <br />
              Intelligent
              <br />
              Motivated
            </span>
          }
        />
      </div>
      <div
        className="PCOnly"
        style={{
          position: "fixed",
          left: "50%",
          bottom: "20px",
          transform: "translateX(-50%)",
          margin: 0,
          zIndex: 50,
          width: "min(92vw, 720px)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "var(--primary-pink)" }}>#CodeWithLove</h2>
        <h1
          style={{
            color: "var(--text-color)",
            display: "block",
            margin: 0,
            fontSize: "0.8rem",
            lineHeight: 1.15,
          }}
        >
          <span style={{ display: "inline-block", maxWidth: "100%" }}>
            This website was&nbsp;
            <span style={{ color: "var(--primary-green)" }}>
              designed & scripted by me
            </span>
            &nbsp;just using&nbsp;
            <span style={{ color: "var(--primary-purple)" }}>react.js</span>
            &nbsp;& my knowledge.
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginLeft: "5px",
              }}
              className="material-symbols-rounded"
            >
              auto_stories
            </span>
          </span>
        </h1>
      </div>
    </>
  );
}

export default Landing;
