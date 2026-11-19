import "server-only";
import { videoListSchema, type Video } from "./video-schema";
import rawVideos from "@/data/videos.json";

let cache: Video[] | null = null;

export function getAllVideos(): Video[] {
  if (cache) return cache;
  const parsed = videoListSchema.parse(rawVideos);
  cache = parsed;
  return parsed;
}

export function getVideoById(id: string): Video | undefined {
  return getAllVideos().find((v) => v.id === id);
}
