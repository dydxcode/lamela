import { z } from "zod";

export const videoSchema = z.object({
  id: z.string().min(1),
  url: z.string().url(),
});

export const videoListSchema = z.array(videoSchema);

export type Video = z.infer<typeof videoSchema>;
