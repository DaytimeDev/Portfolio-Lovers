import { useRef, useState, useEffect } from "react";

function PlayerControl({ icon, onClick, showProgress }) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="noselect"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: showProgress ? "var(--primary-pink)" : "transparent",
        border: showProgress
          ? "2px solid var(--purple-border)"
          : "2px solid transparent",
        borderRadius: "10px",
        width: "2.5rem",
        aspectRatio: "1/1",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      <span
        className="material-symbols-rounded"
        style={{ color: "var(--text-color)" }}
      >
        {icon}
      </span>
    </div>
  );
}

function ProgressIndicator({ progress, showProgress, onClick }) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
      style={{
        width: "100%",
        height: "fit-content",
        backgroundColor: "var(--purple-border)",
        borderRadius: "10px",
        padding: "1px",
        backdropFilter: "blur(1px)",
        transition: "all 0.2s ease",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          height: showProgress ? "10px" : "2px",
          width: `${progress}%`,
          backgroundColor: showProgress
            ? "var(--primary-pink)"
            : "var(--purple-border)",
          transition: "all 0.1s linear",
          border: "2px solid var(--purple-border)",
          borderRadius: "10px",
          backdropFilter: "blur(1px)",
        }}
      />
    </div>
  );
}

export default function VideoPlayer({ videoLink }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [fullscreenVideo, setFullscreenVideo] = useState(false);

  function handleProgressClick(e) {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;
    video.currentTime = (newProgress / 100) * video.duration;
    setProgress(newProgress);
  }

  // When isPlaying changes, play or pause the video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }

    const handleEnded = () => setIsPlaying(false);
    video.addEventListener("ended", handleEnded);

    video.addEventListener("timeupdate", () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    });

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("timeupdate", () => {
        const currentProgress = (video.currentTime / video.duration) * 100;
        setProgress(currentProgress);
      });
    };
  }, [isPlaying]);

  useEffect(() => {
    // if f press while on page
    const handleKeyDown = (e) => {
      if (e.key === "f") {
        setFullscreenVideo((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // if space press while on page
    const handleKeyDown = (e) => {
      if (e.key === "Space") {
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Listen for changes to fullscreenVideo and enter/exit fullscreen accordingly
  useEffect(() => {
    const container = videoRef.current?.parentElement;
    if (!container) return;

    if (fullscreenVideo) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setFullscreenVideo(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [fullscreenVideo]);

  return (
    <div
      style={{
        position: "relative",
      }}
      onClick={() => setIsPlaying(!isPlaying)}
      onMouseOver={() => setShowProgress(true)}
      onMouseLeave={() => setShowProgress(false)}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "10px",
          zIndex: 1,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            gap: "10px",
            width: "100%",
          }}
        >
          <PlayerControl
            icon={isPlaying ? "pause" : "play_arrow"}
            onClick={() => setIsPlaying(!isPlaying)}
            showProgress={
              (showProgress && isPlaying) || (!isPlaying && progress > 0)
            }
          />
          <ProgressIndicator
            progress={progress}
            showProgress={
              (showProgress && isPlaying) || (!isPlaying && progress > 0)
            }
            onClick={handleProgressClick}
          />
          <PlayerControl
            icon={fullscreenVideo ? "collapse_content" : "expand_content"}
            onClick={() => setFullscreenVideo(!fullscreenVideo)}
            showProgress={
              (showProgress && isPlaying) || (!isPlaying && progress > 0)
            }
          ></PlayerControl>
        </div>
      </div>
      <video
        ref={videoRef}
        style={{ width: "100%", height: "100%" }}
        src={videoLink}
      ></video>
    </div>
  );
}
