import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import LangSwitcher from "@/components/ui/lang-switcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations('Navbar')
  return (
    <header className="section-header bg-black sticky top-0 left-0 right-0 z-30 py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="text-secondary font-bold text-2xl">
            Zenith
          </Link>
          <div className="flex items-center gap-6">
            <LangSwitcher />
            <Button>{t('contact')}</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
