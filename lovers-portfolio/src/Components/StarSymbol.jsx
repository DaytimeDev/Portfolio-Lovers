import "../App.css";

function StarSymbol({
  insideColor,
  outsideColor,
  style,
  innerWidth,
  outerWidth,
  scaleOnSpawn,
  spinAnimation,
}) {
  return (
    <>
      <svg
        className={
          scaleOnSpawn
            ? "scaleSpawnDelayed"
            : "" + (spinAnimation ? "spinAnimation" : "")
        }
        style={{ ...(style || {}), overflow: "visible" }}
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0903 5.39271C17.4879 2.00715 22.8454 3.44264 23.229 7.57346L23.2436 7.77553L23.4437 11.5942L27.1386 12.5842C31.3492 13.7125 31.6557 19.5697 27.586 21.1319L24.0152 22.5014L24.2157 26.3222C24.4438 30.6754 18.9681 32.7775 16.2247 29.3897L13.8182 26.4176L10.248 27.7883C6.17836 29.3505 2.48723 24.7922 4.86137 21.1362L6.94451 17.9273L4.53776 14.9561C1.79442 11.5684 4.98843 6.64916 9.19913 7.77734L12.894 8.76737L14.9766 5.5604L15.0903 5.39271Z"
          stroke={outsideColor || "white"}
          stroke-width={innerWidth + outerWidth}
        />
        <path
          d="M16.783 6.46703C18.1223 4.73087 20.9341 5.48427 21.2259 7.65749L21.247 7.88052L21.5234 13.1502L26.6209 14.516C28.96 15.1429 29.1305 18.3966 26.8701 19.2648L21.943 21.1566L22.2192 26.4272C22.3455 28.8454 19.3032 30.013 17.7792 28.131L14.4582 24.0292L9.53113 25.921C7.27032 26.7888 5.21942 24.2565 6.53796 22.2254L9.41145 17.7988L6.09134 13.6972C4.56787 11.8151 6.34241 9.08251 8.68149 9.70919L13.779 11.0751L16.6532 6.64961L16.783 6.46703Z"
          fill={insideColor || "white"}
          stroke="#1F1F1F"
          stroke-width={innerWidth}
        />
      </svg>
    </>
  );
}

export default StarSymbol;
