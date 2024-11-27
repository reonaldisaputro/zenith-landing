"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const languageList = [
    {
      src: "/english.png",
      value: "en",
      label: "ENG",
    },
    {
      src: "/indonesia.png",
      value: "id",
      label: "IDN",
    },
  ];

  const langSelected = languageList.find((lang) => lang.value === locale);

  function onSelect(lang) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: lang }
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="py-3 px-8">
          <Image
            src={langSelected?.src}
            width={24}
            height={24}
            alt={`flag-${langSelected?.value}`}
          />
          {langSelected?.label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languageList.map((lang) => (
          <DropdownMenuItem key={`lang-${lang.value}`} onClick={() => onSelect(lang.value)}>
            <Image
              src={lang.src}
              width={24}
              height={24}
              alt={`flag-${lang.value}`}
            />
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
