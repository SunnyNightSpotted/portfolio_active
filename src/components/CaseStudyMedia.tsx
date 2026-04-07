import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface CaseStudyMediaProps {
  src: string;
  alt: string;
  caption?: string;
  isVideo?: boolean;
  videoStyle?: React.CSSProperties;
  videoClassName?: string;
}

const Lightbox = ({ src, alt, caption, onClose }: { src: string; alt: string; caption?: string; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
    onClick={onClose}
  >
    <button
      onClick={onClose}
      className="absolute top-4 right-4 z-[101] text-white/70 hover:text-white transition-colors p-2"
      aria-label="Close lightbox"
    >
      <X className="w-6 h-6" />
    </button>
    <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
      <img
        src={src}
        alt={alt}
        className="rounded-sm"
        style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain' }}
      />
      {caption && (
        <p className="text-white/60 text-xs italic mt-3 text-center max-w-[80vw]">{caption}</p>
      )}
    </div>
  </div>
);

const CaseStudyMedia = ({ src, alt, caption, isVideo, videoStyle, videoClassName }: CaseStudyMediaProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const isMobile = useIsMobile();
  const isDesktop = !isMobile && typeof window !== "undefined" && window.innerWidth >= 1024;

  if (isVideo) {
    const maxH = videoStyle?.maxHeight || '460px';
    return (
      <figure style={{ isolation: 'isolate' }}>
        <div
          className="rounded-sm"
          style={{
            maxHeight: maxH,
            overflow: 'hidden',
            margin: '0 auto',
            width: 'fit-content',
            maxWidth: '100%',
          }}
        >
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            controls
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
            aria-label={alt}
            className={videoClassName || "rounded-sm"}
            style={{
              height: '100%',
              width: 'auto',
              maxHeight: 'inherit',
              maxWidth: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>
        {caption && (
          <figcaption className="text-[13px] text-muted-foreground/60 italic mt-2">{caption}</figcaption>
        )}
      </figure>
    );
  }

  return (
    <>
      <figure>
        <div
          className={isDesktop ? "relative group cursor-pointer" : ""}
          onClick={isDesktop ? () => setLightboxOpen(true) : undefined}
        >
          <img src={src} alt={alt} className="w-full rounded-sm" />
          {isDesktop && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-sm flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow-lg" />
            </div>
          )}
        </div>
        {caption && (
          <figcaption className="text-[13px] text-muted-foreground/60 italic mt-2">{caption}</figcaption>
        )}
      </figure>
      {lightboxOpen && <Lightbox src={src} alt={alt} caption={caption} onClose={() => setLightboxOpen(false)} />}
    </>
  );
};

export default CaseStudyMedia;
