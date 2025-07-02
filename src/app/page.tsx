import Header from "@/components/layouts/Header";
import TrendingNews from "@/components/blocks/TrendingNews";
import FrontNews from "@/components/blocks/FrontNews";
import Books from "@/components/blocks/Books";
import MultiMedia from "@/components/blocks/MultiMedia";
import FeaturedNews from "@/components/blocks/FeaturedNews";
import ThreeColumnNews from "@/components/blocks/ThreeColumnNews";
import NewsByCategory from "@/components/blocks/NewsByCategory";
import Magazine from "@/components/blocks/Magazine";
import Videos from "@/components/blocks/Videos";
import Footer from "@/components/layouts/Footer";
import { businessNews, lifestyleNews } from "@/data/mock-data";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-container w-full px-6 mx-auto">
        <div className="py-4">
          <TrendingNews />
        </div>

        <FrontNews />

        <div className="mt-8">
          <Books />
        </div>

        <div className="mt-8 bg-yellow-100 p-8">
          <MultiMedia />
        </div>

        <div className="mt-8">
          <FeaturedNews />
        </div>

        <div className="mt-8">
          <ThreeColumnNews title="KINH DOANH" {...businessNews} />
        </div>

        <div className="mt-8">
          <ThreeColumnNews title="Lifestyle" {...lifestyleNews} />
        </div>

        <div className="mt-8">
          <NewsByCategory />
        </div>

        <div className="mt-8">
          <Magazine />
        </div>

        <div className="mt-8">
          <Videos />
        </div>
      </main>

      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
