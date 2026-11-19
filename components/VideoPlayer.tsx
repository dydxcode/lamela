"use client";

import { classifyVideoSource } from "@/lib/video-source";

type VideoPlayerProps = {
  src: string;
};

export function VideoPlayer({ src }: VideoPlayerProps) {
  const kind = classifyVideoSource(src);

  if (kind === "file") {
    return (
      <div className="player-fullscreen flex items-center justify-center">
        <video
          className="w-full h-full object-contain bg-black"
          controls
          playsInline
          preload="metadata"
          src={src}
        >
          Browser Anda tidak mendukung pemutaran video.
        </video>
      </div>
    );
  }

  return (
    <div className="player-fullscreen">
      <iframe
        src={src}
        className="w-full h-full border-0"
        scrolling="no"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
