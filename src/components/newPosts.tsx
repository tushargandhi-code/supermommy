import Image from "next/image";
import CreationDate from "./creationDate";
import Link from "next/link";

const NewPosts = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
      <div className="col-span-full grid grid-cols-[auto_1fr] gap-6">
        <h1 className="text-xl">NEW ARTICLES</h1>
        <div className="border-b border-neutral-300 self-center " />
      </div>
      {articles.map((article) => (
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
          <p className="mt-3 line-clamp-3 text-neutral-600 font-medium">{article.contents[0]}</p>
        </Link>
      ))}
    </div>
  );
};

export default NewPosts;
