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
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto w-full max-w-4xl">
        <VideoPlayer src={video.url} />
      </div>
    </main>
  );
}
