import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RHP and Price Band Advertisement AV",
  description:
    "Watch the RHP and Price Band Advertisement videos in English and Hindi.",
};

const videos = [
  {
    title: "RHP AV – English",
    embedUrl:
      "https://drive.google.com/file/d/1p6CxVNdWx0tF4XkyfcGmam6Aq0tz_w0O/preview",
  },
  {
    title: "RHP AV – Hindi",
    embedUrl:
      "https://drive.google.com/file/d/18NKArbGfqp3Pk4J3CRHusK7j356iac1L/preview",
  },
];

export default function RHPAndPriceBandAdvertisementAVPage() {
  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      style={{ backgroundColor: "#FFFBF0" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="mb-12 text-3xl font-semibold md:text-4xl">
          RHP and Price Band Advertisement AV
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {videos.map((video) => (
            <article key={video.title} className="space-y-4">
              <h2 className="text-xl font-medium md:text-2xl">{video.title}</h2>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src={video.embedUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={video.title}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
