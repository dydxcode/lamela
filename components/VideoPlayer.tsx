"use client";

type VideoPlayerProps = {
  src: string;
};

export function VideoPlayer({ src }: VideoPlayerProps) {
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
