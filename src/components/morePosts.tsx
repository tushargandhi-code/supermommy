import Image from "next/image";
import React from "react";
import CreationDate from "./creationDate";
import Link from "next/link";

const MorePosts = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
      <div className="sm:col-span-full grid grid-cols-[auto_1fr] gap-6">
        <h1>MORE POSTS</h1>
        <div className="border-b border-neutral-300 self-center " />
      </div>
      {articles.map((article) => (
        <Link
          href={`/${article.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
          key={article.imgUrl}
          className="flex items-center gap-3"
        >
          <div className="w-20 h-20 shrink-0 relative">
            <Image
              src={`/articleassets/${article.imgUrl}`}
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
          <div>
            <h1 className="line-clamp-2 max-w-[250px]">{article.title}</h1>
            <span className="text-xs text-neutral-600 font-medium">
              {article.readTime} | <CreationDate articleNumber={article.articleNumber} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MorePosts;
