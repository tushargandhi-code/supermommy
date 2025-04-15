"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import CreationDate from "./creationDate";

const TopPosts = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[3fr_auto_1.6fr] gap-6 md:gap-8 lg:gap-10">
      <Swiper
        speed={600}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, Pagination]}
        pagination={true}
        loop
        className="w-full"
      >
        {articles.slice(0, 5).map((article) => (
          <SwiperSlide key={article.imgUrl} className="pb-6">
            <Link href={`/${article.title.replace(/[^A-Za-z0-9]+/g, "-")}`}>
              <div className="w-full relative aspect-video">
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
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl line-clamp-2 mt-2 max-w-[90%]">
                {article.title}
              </h1>
              <p className="mt-3 line-clamp-3 text-neutral-600 font-medium">
                {article.contents[0]}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="border-t lg:border-t-0 lg:border-l border-neutral-300" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 place-content-start gap-6 md:gap-8">
        {articles.slice(5).map((article) => (
          <Link
            href={`/${article.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            key={article.articleNumber}
          >
            <div className="w-full aspect-video relative">
              <Image
                src={`/articleassets/${article.imgUrl}`}
                alt=""
                fill
                sizes="100%"
                className="object-cover object-center"
              />
            </div>
            <p className="text-xs text-neutral-600 font-medium mt-2">
              {article.readTime} | <CreationDate articleNumber={article.articleNumber} />
            </p>
            <h1 className="text-xl line-clamp-2 mt-2 max-w-[380px]">{article.title}</h1>
            <p className="mt-3 line-clamp-3 text-neutral-600 font-medium lg:hidden">
              {article.contents[0]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default TopPosts;
