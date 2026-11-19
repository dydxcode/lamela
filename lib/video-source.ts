export type VideoSourceKind = "file" | "embed";

const FILE_EXTENSIONS = [
  ".mp4",
  ".webm",
  ".ogg",
  ".ogv",
  ".mov",
  ".m4v",
  ".m3u8",
  ".mpd",
];

export function classifyVideoSource(url: string): VideoSourceKind {
  let pathname: string;
  try {
    pathname = new URL(url).pathname.toLowerCase();
  } catch {
    return "embed";
  }

  if (FILE_EXTENSIONS.some((ext) => pathname.endsWith(ext))) {
    return "file";
  }
  return "embed";
}
