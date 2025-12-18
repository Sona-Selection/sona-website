export default function DRHPAVPage() {
  const videos = [
    {
      title: "DRHP AV - English",
      embedUrl:
        "https://drive.google.com/file/d/1IM4zhdrw62W6NJc9K_md-cgcmayVHSbm/preview",
    },
    {
      title: "DRHP AV - Hindi",
      // Placeholder - replace with actual Hindi video link
      embedUrl:
        "https://drive.google.com/file/d/1iB3XGLMttDfy4riDkvrICTW0QYoq0LKd/preview",
    },
  ];

  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      style={{ backgroundColor: "#FFFBF0" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-12">DRHP AV</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-medium">{video.title}</h2>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={video.embedUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={video.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
