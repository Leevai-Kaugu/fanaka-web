interface LogoBubbleProps {
  src: string;
  alt: string;
  size?: number; // optional size in px, default 80
}

export default function LogoBubble({ src, alt, size = 80 }: LogoBubbleProps) {
  return (
    <div
      className="flex items-center justify-center rounded-full bg-white shadow-md overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img src={src} alt={alt} className="object-contain w-full h-full p-2" />
    </div>
  );
}
