"use client";

import { classifyVideoSource } from "@/lib/video-source";

type VideoPlayerProps = {
  src: string;
};

export function VideoPlayer({ src }: VideoPlayerProps) {
  const kind = classifyVideoSource(src);

  if (kind === "file") {
    return (
      <div className="w-full">
        <video
          className="w-full max-h-[80vh] bg-black rounded-lg"
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
    <div className="w-full aspect-video">
      <iframe
        src={src}
        className="w-full h-full rounded-lg border-0"
        scrolling="no"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
