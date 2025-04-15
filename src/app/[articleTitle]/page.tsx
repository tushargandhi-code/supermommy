import CreationDate from "@/components/creationDate";
import Share from "./share";
import Image from "next/image";
import articles from "@/constant/all";
import RecentPosts from "@/components/recentPosts";
import MorePosts from "@/components/morePosts";
import Link from "next/link";
import Form from "./form";
import Outbrain from "@/components/outbrain";
import Taboola from "@/components/taboola";

type Params = { params: { articleTitle: string } };

export const generateStaticParams = () => {
  return articles.map(({ title }) => ({
    articleTitle: title.replace(/[^A-Za-z0-9]+/g, "-"),
  }));
};

export const generateMetadata = ({ params: { articleTitle } }: Params) => {
  const article = articles.find(({ title }) => {
    return title.replace(/[^A-Za-z0-9]+/g, "-") === articleTitle;
  }) as Article;
  return {
    title: article.title,
    description: article.contents.at(-1),
    openGraph: {
      url: `/${articleTitle}`,
      title: article.title,
      description: article.contents.at(-1),
      images: [`/articleassets/${article.imgUrl}`],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.contents.at(-1),
      images: [`/articleassets/${article.imgUrl}`],
    },
  };
};

const Page = ({ params: { articleTitle } }: Params) => {
  const article = articles.find(({ title }) => {
    return title.replace(/[^A-Za-z0-9]+/g, "-") === articleTitle;
  }) as Article;

  return (
    <main className="container grid grid-cols-1 lg:grid-cols-[.7fr_.3fr] xl:grid-cols-[.75fr_.25fr] items-start gap-6 md:gap-8 lg:gap-12 xl:gap-16 mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-20">
      <div style={{ lineHeight: "200%" }}>
        <h1
          style={{ lineHeight: "150%" }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-950"
        >
          {article.title}
        </h1>
        <div className="mt-12">
          <div id="taboola-widget-1x1"></div>
          <div id="taboola-widget-2x1"></div>
          <div id="taboola-widget-4x1"></div>
          <div id="taboola-left-rail-thumbnails"></div>
          <div id="taboola-right-rail-thumbnails"></div>
          <div id="taboola-footer-feed-50-sc"></div>
          <div id="taboola-trigger-next-up-now"></div>
        </div>
        <div className="w-full aspect-video relative mt-12">
          <Image
            src={`/articleassets/${article.imgUrl}`}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex items-center gap-x-2 font-semibold text-sm mt-6 text-neutral-700">
          <Image
            src={`/authors/${article.authorName}.jpg`}
            alt="Author"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>By {article.authorName}</span> | <p>{article.readTime}</p>|
          <CreationDate articleNumber={article.articleNumber} />
        </div>
        <div className="mt-12 w-full max-w-[800px] mx-auto grid grid-cols-1 gap-12">
          <Share articleTitle={articleTitle} />
          {article.contents.map((content, index) => (
            <p
              key={index}
              style={{ lineHeight: "200%" }}
              className={`text-lg md:text-xl text-neutral-700 ${
                content.startsWith("***") ? "font-bold" : ""
              }`}
            >
              {content.startsWith("***") ? content.slice(3) : content}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-12">
          <div className="col-span-full grid grid-cols-[auto_1fr] gap-6">
            <h1 className="text-xl">MORE ARTICLES</h1>
            <div className="border-b border-neutral-300 self-center " />
          </div>
          {articles
            .slice(Math.floor(Math.random() * (articles.length - 18)))
            .slice(0, 6)
            .map((article) => (
              <Link key={article.imgUrl} href={`/${article.title.replace(/[^A-Za-z0-9]+/g, "-")}`}>
                <div className="w-full aspect-video relative">
                  <Image
                    src={`/articleassets/${article.imgUrl}`}
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <p className="text-xs text-neutral-600 font-medium mt-2">
                  {article.readTime} | <CreationDate articleNumber={article.articleNumber} />
                </p>
                <h1 className="text-xl line-clamp-2 mt-2">{article.title}</h1>
                <p className="mt-3 line-clamp-3 text-neutral-600 font-medium">
                  {article.contents[0]}
                </p>
              </Link>
            ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-10">
        <RecentPosts
          articles={articles.slice(Math.floor(Math.random() * (articles.length - 18))).slice(0, 6)}
        />
        <MorePosts
          articles={articles.slice(Math.floor(Math.random() * (articles.length - 18))).slice(0, 6)}
        />
        <Form />
        <aside>
          <div className="OUTBRAIN outbrain-desktop" data-widget-id="SL_DT_SB"></div>
        </aside>
      </div>
      <aside className="col-span-full">
        <div className="OUTBRAIN" data-widget-id="GS_1"></div>
      </aside>
      <Outbrain />
      <Taboola />
    </main>
  );
};

export default Page;
