import Image from "next/image";
import React from "react";

export default function ServiceCard({ src, title, description }) {
  return (
    <div className="shadow-bg group h-full">
      <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-background p-[30px] transition duration-300 group-hover:bg-primary">
        <Image
          src={src}
          alt={`icon for ${title}`}
          width="64"
          height="70"
          className="h-[70px] w-auto"
        />
        <h4 className="mb-[15px] mt-[30px]">{title}</h4>
        <p className="mb-7">{description}</p>
        <a className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5">
          <Image
            src="/icon-black-arrow-right.svg"
            alt="icon-black-arrow-right"
            width="34"
            height="28"
          />
        </a>
      </div>
    </div>
  );
}
