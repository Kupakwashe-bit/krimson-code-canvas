import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Video, VideoOff } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoItem {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
}

const hobbyVideos: VideoItem[] = [
  {
    id: 1,
    title: "Call of Duty: Modern Warfare 2 - Official Worldwide Reveal Trailer",
    url: "/vids/Call_of_Duty__Modern_Warfare_2_-_Official_Worldwide_Reveal_Trailer(1080p60).mp4",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format"
  },
  {
    id: 2,
    title: "Tech Review",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format"
  },
  {
    id: 3,
    title: "AI Projects",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?w=500&auto=format"
  }
];

export function VideoShowcase() {
  const video = hobbyVideos[0]; // Use the first video as the singular showcase

  return (
    <div className="py-8">
      <h3 className="text-2xl font-semibold mb-6 text-center">Video Showcase</h3>
      <div className="flex justify-center">
        <div className="w-full max-w-7xl">
          <video
            src={video.url}
            controls
            autoPlay
            className="w-full h-auto"
          />
          <div className="p-4">
            <h4 className="font-medium text-lg text-center">{video.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
