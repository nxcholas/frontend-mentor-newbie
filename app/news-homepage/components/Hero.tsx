import Image from "next/image";
import CTAButton from "./CTAButton";
import SideArticles from "./SideArticles";

const heroContent = {
  imageSrc: "/news-homepage/image-web-3-desktop.jpg",
  headingText: "The Bright Future of Web 3.0?",
  subtext:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
};

function Hero() {
  return (
    <section
      aria-labelledby="Hero"
      className="w-full flex flex-col lg:flex-row gap-8"
    >
      <div className="banner relative w-full flex flex-col gap-6">
        <div className="banner-image relative w-full">
          <Image
            src={heroContent.imageSrc}
            alt="Hero-Banner"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div className="banner-heading w-full flex flex-col lg:flex-row gap-8">
          <h1 className="text-news-homepage-very-dark-blue text-[56px] font-extrabold leading-15">
            {heroContent.headingText}
          </h1>
          <div className="subtext w-full flex flex-col gap-8">
            <p className="text-news-homepage-dark-grayish-blue">
              {heroContent.subtext}
            </p>
            <div className="cta-button">
              <CTAButton text={"READ MORE"} />
            </div>
          </div>
        </div>
      </div>
      <div className="side-articles w-full lg:max-w-87.5">
        <SideArticles />
      </div>
    </section>
  );
}

export default Hero;
