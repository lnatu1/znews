import TrendingNews from "@/components/blocks/TrendingNews";
import FrontNews from "@/components/blocks/FrontNews";
import Books from "@/components/blocks/Books";
import MultiMedia from "@/components/blocks/MultiMedia";
import FeaturedNews from "@/components/blocks/FeaturedNews";
import ThreeColumnNews from "@/components/blocks/ThreeColumnNews";
import NewsByCategory from "@/components/blocks/NewsByCategory";
import Magazine from "@/components/blocks/Magazine";
import Videos from "@/components/blocks/Videos";
import { fetchMockData } from "@/lib/data-fetcher";
import {
  MultiMediaData,
  FrontNewsData,
  ThreeColumnData,
  CategoryData,
} from "@/interfaces/page-data";
import {
  BasicNews,
  FeaturedNews as FNews,
  Magazine as MZ,
} from "@/interfaces/front-news";

export default async function Home() {
  const [
    frontNews,
    books,
    multiMedia,
    featureNews,
    businessNews,
    lifestyleNews,
    newsByCategory,
    magazine,
  ] = await Promise.all([
    fetchMockData<FrontNewsData>("front-news"),
    fetchMockData<BasicNews[]>("books"),
    fetchMockData<MultiMediaData>("multi-media"),
    fetchMockData<FNews[]>("featured-news"),
    fetchMockData<ThreeColumnData>("business"),
    fetchMockData<ThreeColumnData>("lifestyle"),
    fetchMockData<CategoryData[]>("category"),
    fetchMockData<MZ[]>("magazine"),
  ]);

  return (
    <main className="max-w-container w-full px-6 mx-auto">
      <div className="py-4 hidden md:block">
        <TrendingNews />
      </div>

      <div className="mt-4">
        <FrontNews {...frontNews} />
      </div>

      <div className="mt-8">
        <Books data={books} />
      </div>

      <div className="mt-8 bg-yellow-100 p-8">
        <MultiMedia {...multiMedia} />
      </div>

      <div className="mt-8">
        <FeaturedNews data={featureNews} />
      </div>

      <div className="mt-8">
        <ThreeColumnNews title="KINH DOANH" {...businessNews} />
      </div>

      <div className="mt-8">
        <ThreeColumnNews title="Lifestyle" {...lifestyleNews} />
      </div>

      <div className="mt-8">
        <NewsByCategory data={newsByCategory} />
      </div>

      <div className="mt-8">
        <Magazine data={magazine} />
      </div>

      <div className="mt-8 hidden lg:block">
        <Videos />
      </div>
    </main>
  );
}
