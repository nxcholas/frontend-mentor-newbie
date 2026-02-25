import Image from "next/image";

type NFTPreviewCardType = {
  imgSrc: string;
  avatarSrc: string;
  title: string;
  NFTID: number;
  subtext: string;
  currencyType: string;
  amount: number;
  time: string;
  creator: string;
};

function NFTPreviewCard({
  imgSrc,
  avatarSrc,
  title,
  NFTID,
  subtext,
  currencyType,
  amount,
  time,
  creator,
}: NFTPreviewCardType) {
  return (
    <article className="w-87.5 h-149 bg-nft-preview-card-blue-900 rounded-2xl p-6 flex flex-col gap-6 drop-shadow-2xl">
      <div className="image-container relative w-full aspect-square overflow-hidden group cursor-pointer">
        <Image
          src={imgSrc}
          fill
          className="object-cover rounded-lg"
          alt="NFT Image"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-nft-preview-card-cyan-400/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <Image
            src="/nft-preview-card/icon-view.svg"
            alt="View"
            width={48}
            height={48}
          />
        </div>
      </div>
      <div className="content-container flex flex-col ">
        <h1 className="text-white font-semibold text-[22px]">
          {title} #{NFTID}
        </h1>
        <p className="text-nft-preview-card-blue-500 font-light text-lg mt-4">
          {subtext}
        </p>
      </div>
      <div className="data-container flex justify-between">
        <div className="currency-container flex justify-center items-center gap-x-2">
          <img
            src="/nft-preview-card/icon-ethereum.svg"
            alt="Ethereum Icon"
            className="h-4.5 w-2.75"
          />
          <span className="text-nft-preview-card-cyan-400 font-semibold text-lg">
            {amount} {currencyType}
          </span>
        </div>
        <div className="timer-container flex justify-center items-center gap-x-2">
          <img
            src="/nft-preview-card/icon-clock.svg"
            alt="Ethereum"
            className="h-4 w-4"
          />
          <span className="text-nft-preview-card-blue-500  text-lg">
            {time}
          </span>
        </div>
      </div>
      <div className="w-full flex items-center gap-x-4 border-t border-nft-preview-card-blue-800 pt-3">
        <Image
          src={avatarSrc}
          width={33}
          height={33}
          alt="Avatar Icon"
          className="outline outline-white rounded-full"
        />
        <p className="text-nft-preview-card-blue-500 text-[16px]">
          Creation of <span className="text-white">{creator}</span>
        </p>
      </div>
    </article>
  );
}

export default NFTPreviewCard;
