"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import LangSwitcher from "@/components/ui/lang-switcher";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  return (
    <header className="section-header bg-black sticky top-0 left-0 right-0 z-30 py-3">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-secondary font-bold text-2xl">
            <Image
              src="/logo-mds.png"
              alt="icon-buttery-white-phone"
              width="160"
              height="65"
              className="mt-3"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href={"/en/portfolio"}
              className="text-secondary hover:text-[#BBFF4D] transition-colors"
            >
              {t("portfolio")}
            </Link>
            <LangSwitcher />
            {/* <Button>{t("contact")}</Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleMenu}
          >
            <div
              className="absolute right-0 top-0 h-screen w-[250px] bg-black border-l border-gray-800 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6">
                <Link
                  href={"/en/portfolio"}
                  className="text-secondary hover:text-[#BBFF4D] transition-colors text-lg"
                  onClick={toggleMenu}
                >
                  {t("portfolio")}
                </Link>
                <div className="py-2">
                  <LangSwitcher />
                </div>
                <Button onClick={toggleMenu}>{t("contact")}</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
