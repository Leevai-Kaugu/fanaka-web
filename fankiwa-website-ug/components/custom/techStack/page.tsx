interface CardProps {
  imageSrc: string;
  altText: string;
  bgColor: string;
  textColor: string;
  description: string;
  className?: string; // optional extra classes
}

export default function Card({
  imageSrc,
  altText,
  bgColor,
  textColor,
  description,
  className = "",
}: CardProps) {
  return (
    <div
      className={`relative p-6 rounded-xl shadow-md flex flex-col items-center ${bgColor} ${textColor} ${className}`}
    >
      {/* Circle Image inside the card */}
      <div className="w-16 h-16 p-2 rounded-full overflow-hidden bg-white shadow-md mb-4">
        <img src={imageSrc} alt={altText} className="w-full h-full object-contain" />
      </div>

      <p
        className={`text-sm text-center ${
          textColor.includes("white") ? "opacity-90" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
