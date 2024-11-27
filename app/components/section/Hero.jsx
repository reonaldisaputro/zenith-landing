import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Hero() {
  const t = useTranslations("HomePage.Hero");
  return (
    <section className="section-hero bg-black pb-20 pt-[80px] text-secondary">
      <div className="container">
        <div className="relative z-10 grid items-center justify-center gap-x-[90px] gap-y-16 grid-cols-[1fr_minmax(0,0.6fr)]">
          <div className="text-secondary text-center lg:text-start">
            <h1>
              {t.rich("title", {
                wrapper: (chunks) => (
                  <span className="inline-flex items-center gap-5">
                    {chunks}
                    <Image
                      src="/shape-light-lime-5-arms-star.svg"
                      alt="shape-light-lime-5-arms-star"
                      width="74"
                      height="70"
                      className="w-12 md:w-14 lg:w-auto h-auto"
                    />
                  </span>
                ),
              })}
            </h1>
            <p className="mb-10 mt-6 text-lg leading-[1.4] md:mb-14 lg:text-[21px]">
              {t("description")}
            </p>
            <div className="mb-14 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <div className="flex -space-x-3">
                <Image
                  src="/hero-user.png"
                  alt="hero-user-1"
                  width="60"
                  height="60"
                  className="z-0 h-[66px] w-[66px] rounded-[50%] border-[6px] border-black"
                />
                <Image
                  src="/hero-user.png"
                  alt="hero-user-1"
                  width="60"
                  height="60"
                  className="z-0 h-[66px] w-[66px] rounded-[50%] border-[6px] border-black"
                />
                <Image
                  src="/hero-user.png"
                  alt="hero-user-1"
                  width="60"
                  height="60"
                  className="z-0 h-[66px] w-[66px] rounded-[50%] border-[6px] border-black"
                />
              </div>
              <span className="font-semibold">{t("caption")}</span>
            </div>
            <Button size="lg" className="relative pr-20 lg:pr-[118px]">
              {t("button")}
              <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-black">
                <Image
                  src="/icon-buttery-white-phone.svg"
                  alt="icon-buttery-white-phone"
                  width="30"
                  height="30"
                />
              </span>
            </Button>
          </div>
          <div className="border-4 border-secondary rounded-3xl overflow-hidden">
            <Image
              src={"/hero-img.jpg"}
              width={485}
              height={540}
              alt="Hero image"
            />
          </div>
          <Image
            src="/element-light-lime-curve-arrow.svg"
            alt="element-light-lime-curve-arrow"
            width="284"
            height="153"
            className="absolute bottom-0 left-1/2 -z-10 hidden h-auto max-w-52 -translate-x-1/2 lg:inline-block xl:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
