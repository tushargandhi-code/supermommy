import TopPosts from "@/components/topPosts";
import NewPosts from "@/components/newPosts";
import RecentPosts from "@/components/recentPosts";
import MorePosts from "@/components/morePosts";
import articles from "@/constant/home";
import Outbrain from "@/components/outbrain";

const Page = () => {
  return (
    <main className="container mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-20">
      <TopPosts articles={articles.slice(0, 7)} />
      <div className="my-4 sm:my-6 md:my-8 lg:my-10 grid grid-cols-1 lg:grid-cols-[.7fr_.3fr] xl:grid-cols-[.75fr_.25fr] gap-6 md:gap-8 lg:gap-10 items-start">
        <NewPosts articles={articles.slice(19)} />
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-10">
          <RecentPosts articles={articles.slice(7, 13)} />
          <MorePosts articles={articles.slice(13, 19)} />
          <aside>
            <div className="OUTBRAIN outbrain-desktop" data-widget-id="SL_DT_SB"></div>
          </aside>
        </div>
        <aside className="col-span-full">
          <div className="OUTBRAIN" data-widget-id="GS_1"></div>
        </aside>
      </div>
      <Outbrain />
    </main>
  );
};

export default Page;
