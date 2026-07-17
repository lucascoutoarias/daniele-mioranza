import Image from "next/image";

interface WorksGridCardProps {
  title: string;
  images: string[];
}

export default function WorksGridCard({ title, images }: WorksGridCardProps) {
  return (
    <div className="works-card">
      <div className="works-card-inner">
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes="(max-width: 767px) 50vw, 600px"
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
      <span className="works-card-label">{title}</span>
    </div>
  );
}
