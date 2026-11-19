import { z } from "zod";

/**
 * Skema tetap hanya dua properti: id dan url.
 * url divalidasi sebagai URL valid. Jenis (file video vs halaman embed)
 * dideteksi di sisi runtime oleh VideoPlayer.
 */
export const videoSchema = z.object({
  id: z.string().min(1),
  url: z.string().url(),
});

export const videoListSchema = z.array(videoSchema);

export type Video = z.infer<typeof videoSchema>;
