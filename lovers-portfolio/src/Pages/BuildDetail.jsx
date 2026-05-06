import React from "react";
import "../App.css";
import Divider from "../Components/Divider";
import TabButton from "../Components/TabSwitch/TabButton";
import TabSwitch from "../Components/TabSwitch/TabSwitch";
import builds from "../data/builds";
import NotFound from "./NotFound";
import LockSymbol from "../Components/LockSymbol";
import VideoPlayer from "../Components/VideoPlayer";

function BuildDetail() {
  const slug = window.location.pathname.split("/")[2] || "build";
  const build = builds.find((entry) => entry.slug === slug);

  const [activeTab, setActiveTab] = React.useState("video");

  return (
    <>
      {build && (
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
              <TabSwitch>
                <TabButton
                  iconName="videocam"
                  text="Video"
                  isActive={activeTab === "video"}
                  onClick={() => setActiveTab("video")}
                />
                <TabButton
                  iconName="code"
                  text="Code"
                  isActive={activeTab === "code"}
                  onClick={() => setActiveTab("code")}
                />
              </TabSwitch>
              <div
                className="imageContainer scaleIn hundredPercentOnMobile"
                style={{
                  width: "30vw",
                  position: "relative",
                  aspectRatio: "16/9",
                  backgroundColor: "var(--purple-border)",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--purple-border)",
                  overflow: "hidden",
                }}
              >
                {activeTab === "video" ? (
                  build.videoLink ? (
                    <div className="scaleIn">
                      <VideoPlayer videoLink={build.videoLink} />
                    </div>
                  ) : (
                    <h1
                      className="scaleIn noselect"
                      style={{ color: "var(--purple-border)" }}
                    >
                      <span className="material-symbols-rounded">search</span>
                      &nbsp; No video found
                    </h1>
                  )
                ) : (
                  <div>
                    <h1
                      className="scaleIn noselect"
                      style={{
                        textAlign: "center",
                        color: "var(--purple-border)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                        fontVariationSettings:
                          "'wght' 700, 'slnt' -10, 'GRAD' 0, 'ROND' 100",
                      }}
                    >
                      <LockSymbol
                        style={{
                          width: "2rem",
                        }}
                        insideColor={"var(--primary-pink)"}
                        outsideColor={"var(--purple-border)"}
                      />
                      This feature isn't quite here yet...
                      <span
                        style={{
                          fontSize: "0.8rem",
                        }}
                      >
                        This website is a work in progress and is being worked
                        on daily.
                      </span>
                    </h1>
                    <div
                      className="noselect"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "var(--purple-border)",
                        border: "2px solid var(--purple-border)",
                        borderRadius: "50%",
                        width: "2rem",
                        aspectRatio: "1/1",
                        position: "absolute",
                        bottom: "5px",
                        right: "5px",
                        cursor: "pointer",
                        zIndex: 10,
                      }}
                    >
                      <span
                        className="material-symbols-rounded"
                        style={{ color: "var(--text-color)" }}
                      >
                        expand_all
                      </span>
                    </div>
                  </div>
                )}
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
                    fontVariationSettings:
                      "'wght' 1000, 'wdth' 151, 'slnt' -10, 'GRAD' 0, 'ROND' 100",
                  }}
                >
                  {build.title}
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
                {build ? (
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
                      {build.details?.map((detail) => (
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
                  <p className="nomargin">That build could not be found.</p>
                )}
              </div>
              <Divider />
              <h2>Status</h2>
              <p className={`nomargin detailStat ${"status" + build.status}`}>
                {build.status}
              </p>
              <br />
              <h2>Type</h2>
              <p
                className="nomargin detailStat"
                style={{ color: "var(--primary-pink)" }}
              >
                {build.type}
              </p>
              <Divider />
            </div>
          </div>
        </>
      )}
      {!build && <NotFound />}
    </>
  );
}

export default BuildDetail;
