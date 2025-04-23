
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
    title: "Coding Session",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = (id: number) => {
    if (activeVideo === id) {
      setActiveVideo(null);
      setIsPlaying(false);
    } else {
      setActiveVideo(id);
      setIsPlaying(true);
    }
  };

  return (
    <div className="py-8">
      <h3 className="text-2xl font-semibold mb-6">Video Showcase</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbyVideos.map((video) => (
          <Card key={video.id} className="overflow-hidden group hover:border-primary/50 transition-colors">
            <CardContent className="p-0 relative">
              {activeVideo === video.id ? (
                <iframe
                  src={`${video.url}${isPlaying ? '?autoplay=1' : ''}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                />
              ) : (
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleVideoClick(video.id)}
                      className="text-white hover:text-primary hover:bg-white/10"
                    >
                      {activeVideo === video.id ? <VideoOff className="h-8 w-8" /> : <Video className="h-8 w-8" />}
                    </Button>
                  </div>
                </div>
              )}
              <div className="p-4">
                <h4 className="font-medium text-lg">{video.title}</h4>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
