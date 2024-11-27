import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function About({ settings }) {
  const t = useTranslations("HomePage.About");
  const abouts = [
    {
      title: "15+",
      description: t("content.experience"),
    },
    {
      title: "84k",
      description: t("content.project"),
    },
    {
      title: "70%",
      description: t("content.satisfaction"),
    },
  ];

  function getVideoEmbedYoutube() {
    if (!settings.video_url.startsWith("https://www.youtube.com")) return "";
    if (settings.video_url.startsWith("https://www.youtube.com/embed"))
      return settings.video_url;
    if (settings.video_url.includes("/watch")) {
      const url = new URL(settings.video_url);
      return `https://www.youtube.com/embed/${url.searchParams.get("v")}`;
    }

    return "";
  }

  function getThumbnailYoutube() {
    if (!settings.video_url.startsWith("https://www.youtube.com"))
      return "/about-img.jpg";
    const url = new URL(settings.video_url);
    if (settings.video_url.startsWith("https://www.youtube.com/embed")) {
      const idVideo = url.pathname.replace("/embed/", '');
      return `https://img.youtube.com/vi/${idVideo}/maxresdefault.jpg`;
    }
    if (settings.video_url.includes("/watch")) {
      const idVideo = url.searchParams.get("v");
      return `https://img.youtube.com/vi/${idVideo}/maxresdefault.jpg`;
    }
  }

  return (
    <section className="section-about">
      <div className="section-space">
        <div className="container">
          <div className="mb-10 md:mb-16 lg:mb-20">
            <div className="grid items-center gap-x-6 gap-y-10 text-center lg:grid-cols-[1fr_minmax(0,0.55fr)] lg:text-start">
              <h2>
                {t.rich("title", {
                  wrapper: (chunks) => (
                    <span>
                      {chunks}{" "}
                      <Image
                        src="/shape-light-lime-5-arms-star.svg"
                        alt="shape-light-lime-5-arms-star"
                        width="74"
                        height="70"
                        className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                      />
                    </span>
                  ),
                })}
              </h2>
              <p className="section-description">{t("description")}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.8fr_0.4fr] gap-6">
            <div className="flex items-center justify-center overflow-hidden rounded-3xl border-4 border-black relative">
              <Image
                src={getThumbnailYoutube()}
                alt="about-img"
                width={846}
                height={476}
                className="h-full w-full object-cover"
              />
              <div className="absolute inline-block">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="pr-16">
                      Play{" "}
                      <span className="rounded-full absolute right-0 inline-flex items-center justify-center">
                        <Image
                          src={"/icon-buttery-white-black-play.svg"}
                          alt="icon play"
                          width={50}
                          height={50}
                        />
                      </span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[unset] w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]">
                    <DialogHeader className="hidden">
                      <DialogTitle>Video Url</DialogTitle>
                    </DialogHeader>
                    <iframe
                      className="w-full h-full mt-4"
                      src={getVideoEmbedYoutube()}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="rounded-3xl bg-black p-8">
              <ul className="divide-y divide-[#333] flex flex-col jsutify-between h-full">
                {abouts.map((item, index) => (
                  <li key={`about-${index}`} className="py-6 text-center">
                    <div className="font-title text-4xl font-bold leading-[1.07] -tracking-[1%] text-primary md:text-5xl lg:text-[70px]">
                      {item.title}
                    </div>
                    <span className="mt-3 inline-block text-secondary">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
