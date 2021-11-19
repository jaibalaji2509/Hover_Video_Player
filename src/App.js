import { css } from "@emotion/css";
import HoverVideoPlayer from "react-hover-video-player";

const bigBuckBunnySrc =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function App() {
  return (

    <div>
       <h1>Hover Video Player</h1>
    <HoverVideoPlayer
      videoSrc={bigBuckBunnySrc}
      pausedOverlay={
        <div
          className={css`
            background-color: DarkSeaGreen;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 99%;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <div
            className={css`
              font-family: sans-serif;
              text-align: center;
            `}
          >
            <h1>The video is paused.</h1>
            <p>Hover to play!</p>
          </div>
        </div>
      }
    />
</div>
  );
}
