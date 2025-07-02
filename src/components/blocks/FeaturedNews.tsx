import Image from "next/image";
import Link from "next/link";
import { FeaturedNews } from "@/interfaces/front-news";
import { featured } from "@/data/mock-data";

const FeaturedCard = ({
  altText,
  description,
  href,
  imageUrl,
  title,
}: FeaturedNews) => {
  return (
    <Link href={href} className="gap-4 hover:text-cyan-700 grid grid-cols-12">
      <div className="relative aspect-4/3 col-span-3">
        <Image src={imageUrl} fill alt={altText} />
      </div>
      <div className="col-span-9">
        <div className="text-3xl font-bold">{title}</div>
        <div
          className="text-gray-500 mt-2"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </Link>
  );
};

export default function FeaturedNewsBlocks() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-4">
      {featured.map((news) => (
        <div className="col-span-full" key={news.id}>
          <FeaturedCard
            altText={news.altText}
            title={news.title}
            href={news.href}
            imageUrl={news.imageUrl}
            description={news.description}
          />
        </div>
      ))}
    </div>
  );
}
