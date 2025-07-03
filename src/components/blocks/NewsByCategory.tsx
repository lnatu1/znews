import Image from "next/image";
import Link from "next/link";
import { BasicNews } from "@/interfaces/front-news";
import HeadLine from "@/components/elements/Headline";
import { CategoryData } from "@/interfaces/page-data";

const TileCard = ({
  href,
  imageUrl = "https://placehold.co/600x400",
  title,
  altText = "sample",
}: BasicNews) => {
  return (
    <Link href={href} className="hover:text-cyan-700">
      <div className="relative aspect-4/3 col-span-2">
        <Image
          src={imageUrl}
          fill
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={altText}
        />
      </div>
      <div className="font-semibold col-span-3 mt-4 min-h-[50px]">{title}</div>
    </Link>
  );
};

const ThumbnailCard = ({ altText, href, imageUrl, title }: BasicNews) => {
  return (
    <Link href={href} className="flex gap-4 hover:text-cyan-700">
      <div className="relative flex-[0_0_30%] aspect-square">
        <Image
          src={imageUrl}
          fill
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={altText}
        />
      </div>
      <div className="font-bold text-sm flex-1">{title}</div>
    </Link>
  );
};

export default function NewsByCategory({ data }: { data: CategoryData[] }) {
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-12">
      {data.map((cate) => (
        <div
          className="col-span-full sm:col-span-6 lg:col-span-3"
          key={cate.category.label}
        >
          <Link href={cate.category.link} className="block">
            <HeadLine label={cate.category.label} />
          </Link>
          <div className="border-b border-gray-200 pb-4 border-t">
            <TileCard
              key={cate.data.featured.id}
              href={cate.data.featured.href}
              title={cate.data.featured.title}
              altText={cate.data.featured.altText}
              imageUrl={cate.data.featured.imageUrl}
            />
          </div>
          <div className="flex flex-col gap-4 mt-6">
            {cate.data.tile.map((news) => (
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
      ))}
    </div>
  );
}
