import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Process() {
  const t = useTranslations("HomePage.Process");
  // const processItem = [
  //   {
  //     title: "Project idea",
  //     description:
  //       "The process starts with a detailed discussion with the client to understand their idea & goals.",
  //   },
  //   {
  //     title: "Brainstorming",
  //     description:
  //       "The process starts with a detailed discussion with the client to understand their idea & goals.",
  //   },
  //   {
  //     title: "Launch",
  //     description:
  //       "The process starts with a detailed discussion with the client to understand their idea & goals.",
  //   },
  // ];
  const processItem = Array.from({ length: 3 }, (_, i) => {
    const numberValue = i + 1;
    return {
      title: t(`content.item_${numberValue}.title`),
      description: t(`content.item_${numberValue}.description`),
    };
  });
  return (
    <section className="section-process">
      <div className="section-space">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_minmax(0,0.67fr)] gap-8">
            <div className="text-center lg:text-start">
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
              <div className="mt-6">
                <p className="section-description">{t("description")}</p>
                <p className="section-description">{t("description_2")}</p>
              </div>
            </div>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="flex flex-col gap-y-6"
            >
              {processItem.map((item, index) => (
                <AccordionItem key={`item-${index}`} value={`item-${index}`}>
                  <AccordionTrigger>
                    0{index + 1}/ {item.title}
                  </AccordionTrigger>
                  <AccordionContent>{item.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
