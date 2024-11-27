import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ContactForm from "@/components/form/contact";

export default function Footer({ settings }) {
  const t = useTranslations("Footer");

  const marqueeText = Array.from({ length: 5 }, () => ({
    text: t("marquee"),
  }));
  const formattedNumber = settings?.phone_number
    .replace("+", "")
    .replace("-", "");

  const baseUrl = process.env.API_BASE_URL;
  return (
    <>
      <section className="section-text-slider bg-black py-5 overflow-hidden">
        <div className="horizontal-slide-from-right-to-left flex items-center gap-6 text-primary">
          {marqueeText.map((item, index) => (
            <>
              <h3 key={`title-marquee-${index}`} className="whitespace-nowrap">
                {item.text}
              </h3>
              <div key={`icon-marquee-${index}`} className="h-10 min-w-[42px]">
                <Image
                  src="/shape-light-lime-5-arms-star.svg"
                  alt="shape-light-lime-5-arms-star"
                  width="74"
                  height="70"
                  className="h-10 w-auto"
                />
              </div>
            </>
          ))}
        </div>
      </section>
      <footer className="section-footer">
        <div className="bg-black">
          <div className="section-space">
            <div className="container">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1fr_minmax(0,0.8fr)] lg:gap-20">
                <div>
                  <div className="space-y-6 text-secondary">
                    <h2>
                      {t.rich("title", {
                        wrapper: (chunks) => (
                          <span>
                            {chunks}{" "}
                            <Image
                              src="/shape-light-lime-5-arms-star.svg"
                              width="74"
                              height="70"
                              alt="icon shape text"
                              className="relative inline-block w-8 md:w-10 lg:w-14"
                            />
                          </span>
                        ),
                      })}
                    </h2>
                    <p className="section-description">{t("description")}</p>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] items-center">
                    <div>
                      <ul className="flex flex-col gap-3 mt-12">
                        <li>
                          <span className="block font-title text-[21px] font-bold leading-[1.42] text-primary">
                            {t("contact.telephone")}
                          </span>
                          <a
                            href={`tel:+${formattedNumber}`}
                            className="text-secondary text-[21px] leading-[1.42]"
                          >
                            {settings?.phone_number}
                          </a>
                        </li>
                        <li>
                          <span className="block font-title text-[21px] font-bold leading-[1.42] text-primary">
                            {t("contact.email")}
                          </span>
                          <a
                            href={`mailto:${settings?.email}`}
                            className="text-secondary text-[21px] leading-[1.42]"
                          >
                            {settings?.email}
                          </a>
                        </li>
                      </ul>
                      <div className="mt-11 flex w-full gap-4">
                        <a
                          href={settings?.x_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-secondary bg-black transition-all duration-300 hover:border-black hover:bg-primary hover:shadow-[0_1.5px_0_0] hover:shadow-secondary"
                        >
                          <Image
                            src="/icon-logo-buttery-white-twitter.svg"
                            alt="icon-logo-buttery-white-twitter"
                            width="19"
                            height="16"
                            className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                          />
                          <Image
                            src="/icon-logo-black-twitter.svg"
                            alt="icon-logo-black-twitter"
                            width="19"
                            height="16"
                            className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                          />
                        </a>
                        <a
                          href={settings?.facebook_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-secondary bg-black transition-all duration-300 hover:border-black hover:bg-primary hover:shadow-[0_1.5px_0_0] hover:shadow-secondary"
                        >
                          <Image
                            src="/icon-logo-buttery-white-facebook.svg"
                            alt="icon-logo-buttery-white-facebook"
                            width="10"
                            height="17"
                            className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                          />
                          <Image
                            src="/icon-logo-black-facebook.svg"
                            alt="icon-logo-black-facebook"
                            width="10"
                            height="17"
                            className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                          />
                        </a>
                        <a
                          href={settings?.instagram_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-secondary bg-black transition-all duration-300 hover:border-black hover:bg-primary hover:shadow-[0_1.5px_0_0] hover:shadow-secondary"
                        >
                          <Image
                            src="/icon-logo-buttery-white-instagram.svg"
                            alt="icon-logo-buttery-white-instagram"
                            width="17"
                            height="18"
                            className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                          />
                          <Image
                            src="/icon-logo-black-instagram.svg"
                            alt="icon-logo-black-instagram"
                            width="17"
                            height="18"
                            className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                          />
                        </a>
                        <a
                          href={settings?.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-secondary bg-black transition-all duration-300 hover:border-black hover:bg-primary hover:shadow-[0_1.5px_0_0] hover:shadow-secondary"
                        >
                          <Image
                            src="/icon-logo-buttery-white-linkedin.svg"
                            alt="icon-logo-buttery-white-linkedin"
                            width="17"
                            height="18"
                            className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                          />
                          <Image
                            src="/icon-logo-black-linkedin.svg"
                            alt="icon-logo-black-linkedin"
                            width="17"
                            height="18"
                            className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="hidden lg:inline-block">
                      <Image
                        src="/element-light-lime-curve-arrow.svg"
                        alt="element-light-lime-curve-arrow"
                        width="284"
                        height="153"
                        className="h-auto max-w-52 lg:inline-block xl:max-w-full"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <ContactForm baseUrl={baseUrl} />
                </div>
              </div>
            </div>
          </div>
          <div className="container py-9">
            <div className="flex justify-between text-secondary">
              <Link href={"/"} className="font-bold text-2xl">
                Zenith
              </Link>
              <p>{t("copyright")}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
