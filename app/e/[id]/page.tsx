import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { VideoPlayer } from "@/components/VideoPlayer";
import { getVideoById } from "@/lib/videos";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const video = getVideoById(id);
  if (!video) return { title: "Not Found" };
  return { title: "Video" };
}

export default async function VideoPage({ params }: PageProps) {
  const { id } = await params;
  const video = getVideoById(id);
  if (!video) notFound();

  return (
    <main className="min-h-[100dvh] bg-black flex items-center justify-center">
      <div className="w-full md:max-w-5xl">
        <VideoPlayer src={video.url} />
      </div>
    </main>
  );
}
