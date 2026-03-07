const sideArticlesData = [
  {
    title: "Hydrogren VS Electric Cars",
    subtext: "Will hydropgen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    subtext:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    subtext:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

function SideArticles() {
  return (
    <article className="side-articles-container w-full py-4 px-6 bg-news-homepage-very-dark-blue h-full flex flex-col gap-8">
      <h1 className="text-news-homepage-orange-500 text-3xl font-bold">New</h1>
      <div className="article-container w-full h-full flex flex-col">
        <div className="article-1 group cursor-pointer w-full flex flex-col gap-2 text-white pb-8 border-b border-news-homepage-dark-grayish-blue leading-7">
          <h1 className="font-extrabold text-xl group-hover:text-news-homepage-orange-500 ">
            {sideArticlesData[0].title}
          </h1>
          <p className="text-[15px]">{sideArticlesData[0].subtext}</p>
        </div>
        <div className="article-2 group cursor-pointer w-full flex flex-col gap-2 text-white py-8">
          <h1 className="font-extrabold text-xl group-hover:text-news-homepage-orange-500">
            {sideArticlesData[1].title}
          </h1>
          <p className="text-[15px]">{sideArticlesData[1].subtext}</p>
        </div>
        <div className="article-3 group cursor-pointer w-full flex flex-col gap-2 text-white pt-8 border-t border-news-homepage-dark-grayish-blue">
          <h1 className="font-extrabold text-xl group-hover:text-news-homepage-orange-500">
            {sideArticlesData[2].title}
          </h1>
          <p className="text-[15px]">{sideArticlesData[2].subtext}</p>
        </div>
      </div>
    </article>
  );
}

export default SideArticles;
