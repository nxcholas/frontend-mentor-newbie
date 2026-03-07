import Image from "next/image";

const bottomArticleData = [
  {
    articleNum: "01",
    imgSrc: "/news-homepage/image-retro-pcs.jpg",
    title: "Reviving Retro PCs",
    subtext: "What happens when old PCs are given modern upgrades?",
  },
  {
    articleNum: "02",
    imgSrc: "/news-homepage/image-top-laptops.jpg",
    title: "Top 10 Laptops of 2022",
    subtext: "Our best picks for various needs and budgets.",
  },
  {
    articleNum: "03",
    imgSrc: "/news-homepage/image-gaming-growth.jpg",
    title: "The Growth of Gaming",
    subtext: "How the pandemic has sparked fresh opportunities",
  },
];

function BottomArticles() {
  return (
    <article className="w-full grid grid-cols-1 gap-10 lg:grid-cols-3">
      {bottomArticleData.map((article, index) => (
        <div key={index} className="w-full flex gap-x-6">
          <Image
            src={article.imgSrc}
            width={130}
            height={130}
            alt={`Article ${index}`}
          />
          <div className="article-content flex flex-col group cursor-pointer">
            <h1 className="text-news-homepage-red-500 font-bold text-3xl">
              {article.articleNum}
            </h1>
            <h2 className="text-very-dark-blue font-extrabold text-lg group-hover:text-news-homepage-red-500">
              {article.title}
            </h2>
            <p className="text-news-homepage-dark-grayish-blue text-[15px]">
              {article.subtext}
            </p>
          </div>
        </div>
      ))}
    </article>
  );
}

export default BottomArticles;
