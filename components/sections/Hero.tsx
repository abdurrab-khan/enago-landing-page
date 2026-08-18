import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <React.Fragment>
      <div className="size-full bg-linear-to-r from-[#FFFCF3] from-47% via-[#FFFCF3]/10 via-77% to-[#FFFCF3] to-100%"></div>
      <Image
        height={367}
        width={367}
        alt="Hero Image"
        src={"/images/hero/magnific__retouch.webp"}
        className="absolute top-0 right-0 h-full w-auto"
      />
    </React.Fragment>
  );
};

const HeroContent = () => {
  return (
    <div className="absolute top-1/2 right-1/2 mx-auto flex h-full w-full translate-x-1/2 -translate-y-1/2 items-center justify-between text-black lg:max-w-355">
      <div className="flex-1">
        <h1 className="text-4xl font-semibold">早稲田大学関係者の皆さま</h1>
        <div className="mt-4">
          <div className="text-2xl font-semibold text-[#212529]">
            <span className="block">エナゴ（Enago）が</span>
            <span className="block">
              研究成果の国際発信をお手伝いいたします
            </span>
          </div>
          <div className="mt-6 flex items-center gap-8">
            <div>
              <Image
                alt="A Paras Logo"
                height={120}
                width={120}
                src={"/images/hero/a-pras-logo.webp"}
              />
            </div>
            <div className="text-md bg-[linear-gradient(90deg,rgba(177,227,235,0)_0%,rgba(177,227,235,0.5)_49%,rgba(177,227,235,0)_100%)] p-3">
              <span className="block">
                エナゴのサービスは文部科学省の研究支援サービス・
              </span>
              <span className="block">
                パートナーシップ（A-PRAS）に認定されています
              </span>
            </div>
          </div>
        </div>
      </div>
      <Image
        height={400}
        width={400}
        alt="World Map"
        src={"/images/hero/world-map.webp"}
      />
    </div>
  );
};

function Hero() {
  return (
    <section className="h-94 w-full">
      <div className="relative size-full">
        <Background />
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;
