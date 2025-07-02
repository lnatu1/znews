import Image from "next/image";
import Link from "next/link";
import { BasicNews, FeaturedNews } from "@/interfaces/front-news";
import { frontNews } from "@/data/mock-data";

const TileCard = ({
  href,
  imageUrl = "https://placehold.co/600x400",
  title,
  altText = "sample",
}: BasicNews) => {
  return (
    <Link href={href} className="grid grid-cols-5 gap-4 hover:text-cyan-700">
      <div className="relative aspect-4/3 col-span-2">
        <Image src={imageUrl} fill alt={altText} />
      </div>
      <div className="font-semibold text-sm col-span-3 pt-1">{title}</div>
    </Link>
  );
};

const FeaturedCard = ({
  altText,
  description,
  href,
  imageUrl,
  title,
}: FeaturedNews) => {
  return (
    <Link href={href} className="flex flex-col gap-4 group">
      <div className="relative aspect-4/3">
        <Image src={imageUrl} fill alt={altText} />
      </div>
      <div className="text-3xl font-bold group-hover:text-cyan-700">
        {title}
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </Link>
  );
};

const ThumbnailCard = ({ altText, href, imageUrl, title }: BasicNews) => {
  return (
    <Link href={href} className="flex flex-col gap-4 hover:text-cyan-700">
      <div className="relative aspect-4/3">
        <Image src={imageUrl} fill alt={altText} />
      </div>
      <div className="font-bold text-sm">{title}</div>
    </Link>
  );
};

export default function FrontNews() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <div className="flex flex-col gap-4">
          {frontNews.tile.map((news) => (
            <TileCard
              key={news.id}
              href={news.href}
              title={news.title}
              altText={news.altText}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className="col-span-7">
        <div>
          {frontNews.featured.map((news) => (
            <FeaturedCard
              key={news.id}
              href={news.href}
              title={news.title}
              altText={news.altText}
              imageUrl={news.imageUrl}
              description={news.description}
            />
          ))}
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-8">
          {frontNews.thumb.map((news) => (
            <ThumbnailCard
              key={news.id}
              href={news.href}
              title={news.title}
              altText={news.altText}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
