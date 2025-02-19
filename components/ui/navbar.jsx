import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import LangSwitcher from "@/components/ui/lang-switcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <header className="section-header bg-black sticky top-0 left-0 right-0 z-30 py-3">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-secondary font-bold text-2xl">
            Mifta Digital Solution
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/en/portfolio"
              className="text-white hover:text-yellow-400 transition"
            >
              {t("portfolio")}
            </Link>
            <LangSwitcher />
            <Button>{t("contact")}</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
