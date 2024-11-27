import { Inter, Syne } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   title: "Zenith",
//   description: "A website dev agency",
// };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: "Zenith",
    description: locale === "en" ? "A website dev agency" : "Agen web terbaik",
    openGraph: { images: ["/metadata-image.png"] },
  };
}

async function getSettings() {
  const response = await fetch(`${process.env.API_BASE_URL}/api/setting`, {
    cache: "no-store",
  });
  return response.json();
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const settings = await getSettings();

  return (
    <html lang={locale}>
      <body className={`${syne.className} ${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer settings={settings?.data || {}} />

          <Toaster/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
