import "../App.css";
import Tool from "../Components/Tool";
import HeartSymbol from "../Components/HeartSymbol";
import StarSymbol from "../Components/StarSymbol";
import LinkButton from "../Components/LinkButton";

function WorkWithMe() {
  return (
    <>
      <div className="centreSection">
        <h1
          style={{
            fontVariationSettings: "'wght' 1000, 'slnt' 0, 'GRAD' 0, 'ROND' 60",
          }}
        >
          Work With Me
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "var(--primary-pink)",
              fontVariationSettings:
                "'wght' 700, 'slnt' 0, 'GRAD' 0, 'ROND' 60",
            }}
          >
            My Tool Suite
            <span className="material-symbols-rounded">build</span>
          </h2>
          <p
            style={{
              margin: 0,
              fontVariationSettings:
                "'wght' 600, 'slnt' 0, 'GRAD' 0, 'ROND' 100",
              fontSize: "20px",
            }}
          >
            All the tools I can use to bring games to life{" "}
            <span
              style={{
                color: "var(--primary-green)",
                fontVariationSettings:
                  "'wght' 1000, 'wdth' 200, 'slnt' -10, 'GRAD' 0, 'ROND' 100",
              }}
            >
              +More
            </span>
          </p>{" "}
          <div
            style={{
              position: "relative",
            }}
          >
            <HeartSymbol
              style={{
                position: "absolute",
                width: "40px",
                top: "-15px",
                right: "0px",
                transform: "rotate(20deg)",
                zIndex: 10,
              }}
              scaleOnSpawn={true}
              strokeWidth={30}
              insideColor={"var(--primary-pink)"}
              outsideColor={"white"}
            />
            <div
              id="tools"
              className="scaleIn"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
                maxWidth: "600px",
                borderRadius: "30px",
              }}
            >
              <Tool
                name="Studio"
                iconSrc={
                  "https://img.icons8.com/?size=100&id=aoRFS7u2O2dm&format=png&color=000000"
                }
              />
              <Tool
                name="GitHub"
                iconSrc="https://cdn.brandfetch.io/idZAyF9rlg/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1719469980826"
              />
              <Tool
                name="Rojo"
                iconSrc="https://github.com/rojo-rbx/rojo/blob/master/assets/brand_images/icon-32.png?raw=true"
              />
              <Tool
                name="VS Code"
                iconSrc={
                  "https://code.visualstudio.com/assets/branding/code-stable.png"
                }
              />
              <Tool
                name="IntelliJ"
                iconSrc="https://cdn.brandfetch.io/idslS6G2ss/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1764613146606"
              />
              <Tool
                name="Roblox"
                iconSrc="https://upload.wikimedia.org/wikipedia/commons/1/1e/Roblox_Logo_2025.png"
              />

              <Tool
                name="Figma"
                iconSrc="https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1729268241679"
              />
              <Tool
                name="Discord"
                iconSrc="https://cdn.brandfetch.io/idM8Hlme1a/theme/light/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668075053047"
              />
              <Tool
                name="React"
                iconSrc="https://cdn.brandfetch.io/idREYlLkpD/theme/dark/id-H4pLvmU.svg?c=1bxid64Mup7aczewSAYMX&t=1746616569173"
              />
              <Tool
                name="Supabase"
                iconSrc="https://cdn.brandfetch.io/idsSceG8fK/w/436/h/449/theme/dark/symbol.png?c=1bxid64Mup7aczewSAYMX&t=1668081497517"
              />
              <Tool
                name="Blender"
                iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/330px-Blender_logo_no_text.svg.png"
              />
              <Tool
                name="Moonwave"
                iconSrc="https://github.com/evaera/moonwave/blob/master/brand/glyph.png?raw=true"
              />
            </div>
          </div>
        </div>
        <div
          id="getInTouchContainer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <h1
            style={{
              fontVariationSettings:
                "'wght' 1000, 'wdth' 151, 'slnt' -10, 'GRAD' 0, 'ROND' 100",
              color: "var(--primary-pink)",
              alignSelf: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Get in touch
            <StarSymbol
              insideColor={"var(--primary-pink)"}
              outsideColor={"white"}
              innerWidth={4}
              outerWidth={2}
              spinAnimation={true}
            />
          </h1>
          <LinkButton
            onClick={() =>
              window.open(
                "https://discord.com/users/562685530790428692",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            Discord
          </LinkButton>
          <LinkButton
            variant="roblox"
            onClick={() =>
              window.open(
                "https://www.roblox.com/users/532657047/profile",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            Roblox
          </LinkButton>
        </div>
      </div>
    </>
  );
}

export default WorkWithMe;
