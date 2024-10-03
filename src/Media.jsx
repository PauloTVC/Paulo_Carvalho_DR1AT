import React, { useEffect, useRef } from "react";
import "./styles.css";

export default function Media({ src, alt, Play }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (src.includes("youtube.com")) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        const player = new window.YT.Player(iframeRef.current, {
          events: {
            onStateChange: (event) => handleYoutube(event),
          },
        });
      };
    }
  }, [src]); // Este useEffect agora tem a dependência `src`

  const handleYoutube = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      Play(true); // Atualiza o estado para vídeo tocando
    } else if (
      event.data === window.YT.PlayerState.PAUSED ||
      event.data === window.YT.PlayerState.ENDED
    ) {
      Play(false); // Atualiza o estado para vídeo pausado ou encerrado
    }
  };

  const handlePlay = () => {
    Play(true);
  };

  const handlePause = () => {
    Play(false);
  };

  return (
    <div className="Media">
      {/\.(jpg|jpeg|png|gif|webp)$/i.test(src) ? (
        <img className="pic" src={src} alt={alt} />
      ) : /\.(mp4|webm|ogg)$/i.test(src) ? (
        <video
          className="pic"
          controls
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handlePause}
        >
          <source src={src} type="video/mp4" />
          {alt}
        </video>
      ) : src.includes("youtube.com") ? (
        <iframe
          className="responsive-iframe"
          ref={iframeRef}
          src={src}
          title={alt}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        ""
      )}
    </div>
  );
}
