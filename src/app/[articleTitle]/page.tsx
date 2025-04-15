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
import React from "react";

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
  <React.Fragment key={index}>
    <p
      style={{ lineHeight: "200%" }}
      className={`text-lg md:text-xl text-neutral-700 ${
        content.startsWith("***") ? "font-bold" : ""
      }`}
    >
      {content.startsWith("***") ? content.slice(3) : content}
    </p>

    {index === 0 && (
  <div className="p-5 rounded-xl hover:bg-purple-100  bg-purple-50">
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {articles
        .filter((post) => post.title !== article.title)
        .slice(4, 5)
        .map((item, index) => (
          <Link
            key={index}
            href={`/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            className="flex items-center gap-4 w-full  transition rounded-lg p-2"
          >
            <Image
              src={`/articleassets/${article.imgUrl}`}
              alt={item.title}
              width={120}
              height={80}
              className="rounded-md object-cover w-[140px] h-[110px] shrink-0"
            />
            <div className="text-left">
              <p className="text-md lg:-mt-12 text-gray-500 mb-1">Don't Miss This!</p>
              <p className="text-lg lg:mt-4 line-clamp-1 text-gray-800 font-semibold">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  </div>
)}


{index === 4 && (
  <div className="p-5 rounded-xl hover:bg-purple-100  bg-purple-50">
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {articles
        .filter((post) => post.title !== article.title)
        .slice(7, 8)
        .map((item, index) => (
          <Link
            key={index}
            href={`/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            className="flex items-center gap-4 w-full  transition rounded-lg p-2"
          >
            <Image
              src={`/articleassets/${article.imgUrl}`}
              alt={item.title}
              width={120}
              height={80}
              className="rounded-md object-cover w-[140px] h-[110px] shrink-0"
            />
            <div className="text-left">
              <p className="text-md lg:-mt-12 text-gray-500 mb-1">You Might Also Like</p>
              <p className="text-lg lg:mt-4 line-clamp-1 text-gray-800 font-semibold">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  </div>
)}


{index === 9 && (
  <div className="p-5 rounded-xl hover:bg-purple-100  bg-purple-50">
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {articles
        .filter((post) => post.title !== article.title)
        .slice(10, 11)
        .map((item, index) => (
          <Link
            key={index}
            href={`/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            className="flex items-center gap-4 w-full  transition rounded-lg p-2"
          >
            <Image
              src={`/articleassets/${article.imgUrl}`}
              alt={item.title}
              width={120}
              height={80}
              className="rounded-md object-cover w-[140px] h-[110px] shrink-0"
            />
            <div className="text-left">
              <p className="text-md lg:-mt-12 text-gray-500 mb-1">More from Our Blog</p>
              <p className="text-lg lg:mt-4 line-clamp-1 text-gray-800 font-semibold">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  </div>
)}

{index === 14 && (
  <div className="p-5 rounded-xl hover:bg-purple-100  bg-purple-50">
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {articles
        .filter((post) => post.title !== article.title)
        .slice(14, 15)
        .map((item, index) => (
          <Link
            key={index}
            href={`/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            className="flex items-center gap-4 w-full  transition rounded-lg p-2"
          >
            <Image
              src={`/articleassets/${article.imgUrl}`}
              alt={item.title}
              width={120}
              height={80}
              className="rounded-md object-cover w-[140px] h-[110px] shrink-0"
            />
            <div className="text-left">
              <p className="text-md lg:-mt-12 text-gray-500 mb-1">From the Archives</p>
              <p className="text-lg lg:mt-4 line-clamp-1 text-gray-800 font-semibold">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  </div>
)}

{index === 19 && (
  <div className="p-5 rounded-xl hover:bg-purple-100  bg-purple-50">
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {articles
        .filter((post) => post.title !== article.title)
        .slice(20, 21)
        .map((item, index) => (
          <Link
            key={index}
            href={`/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            className="flex items-center gap-4 w-full  transition rounded-lg p-2"
          >
            <Image
              src={`/articleassets/${article.imgUrl}`}
              alt={item.title}
              width={120}
              height={80}
              className="rounded-md object-cover w-[140px] h-[110px] shrink-0"
            />
            <div className="text-left">
              <p className="text-md lg:-mt-12 text-gray-500 mb-1">Keep Reading</p>
              <p className="text-lg lg:mt-4 line-clamp-1 text-gray-800 font-semibold">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  </div>
)}
  </React.Fragment>
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
