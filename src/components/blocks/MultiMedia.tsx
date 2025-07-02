import Image from "next/image";
import Link from "next/link";
import { BasicNews, FeaturedNews } from "@/interfaces/front-news";
import { multiMedia } from "@/data/mock-data";

const mediaList = [
  {
    id: "1",
    label: "VIDEO",
    link: "/video",
  },
  {
    id: "2",
    label: "PODCAST",
    link: "/podcast",
  },
  {
    id: "3",
    label: "LONGFORM",
    link: "/longform",
  },
  {
    id: "4",
    label: "STORY",
    link: "/story",
  },
  {
    id: "5",
    label: "QUIZZ",
    link: "/quizz",
  },
];

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
      <div className="font-bold text-xl">{title}</div>
    </Link>
  );
};

export default function MultiMedia() {
  return (
    <div>
      <div className="flex gap-x-12 items-center">
        <div className="font-bold text-2xl py-2 relative pl-6">
          <div className="absolute left-1 top-2.5 h-2/4 -skew-x-16 w-1.5 bg-orange-600"></div>
          MULTIMEDIA
        </div>

        <nav>
          <ul className="flex gap-4">
            {mediaList.map((item) => (
              <li key={item.id}>
                <Link
                  className="font-bold hover:text-orange-500"
                  href={item.link}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-6">
          <FeaturedCard
            altText={multiMedia.featured[0].altText}
            description={multiMedia.featured[0].description}
            title={multiMedia.featured[0].title}
            href={multiMedia.featured[0].href}
            imageUrl={multiMedia.featured[0].imageUrl}
          />
        </div>
        <div className="col-span-6 grid grid-cols-subgrid gap-4">
          {multiMedia.thumb.map((news) => (
            <div className="col-span-3" key={news.id}>
              <ThumbnailCard
                altText={news.altText}
                title={news.title}
                href={news.href}
                imageUrl={news.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
