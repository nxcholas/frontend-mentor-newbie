import React from "react";
import NFTPreviewCard from "./components/NFTPreviewCard";

function page() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <NFTPreviewCard
        imgSrc="/nft-preview-card/image-equilibrium.jpg"
        avatarSrc="/nft-preview-card/image-avatar.png"
        title="Equilibrium"
        NFTID={3429}
        subtext="Our Equilibrium collection promotes balance and calm."
        currencyType="ETH"
        amount={0.041}
        time="3 days left"
        creator="Jules Wyvern"
      />
    </main>
  );
}

export default page;
