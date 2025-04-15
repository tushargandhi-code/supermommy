import React from "react";
import CreationDate from "./creationDate";
import Link from "next/link";

const RecentPosts = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
      <div className="sm:col-span-full grid grid-cols-[auto_1fr] gap-6">
        <h1>RECENT POSTS</h1>
        <div className="border-b border-neutral-300 self-center " />
      </div>
      {articles.map((article, index) => (
        <Link
          href={`/${article.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
          key={article.imgUrl}
          className={`flex items-start gap-3 ${
            index === 0
              ? ""
              : index === 1
              ? "border-t sm:border-t-0 lg:border-t border-neutral-300 pt-6 sm:pt-0 lg:pt-8"
              : "border-t border-neutral-300 pt-6 md:pt-8"
          }`}
        >
          <p className="text-2xl italic">{index + 1}</p>
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

export default RecentPosts;
