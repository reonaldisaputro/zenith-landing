import Hero from "@/app/components/section/Hero";
import Service from "@/app/components/section/service";
import About from "@/app/components/section/about";
import Process from "@/app/components/section/process";

async function getSettings() {
  const response = await fetch(`${process.env.API_BASE_URL}/api/setting`, {
    cache: "no-store",
  });
  return response.json();
}

export default async function Home() {
  const settings = await getSettings();
  return (
    <>
      <Hero />
      <Service />
      <div className="container">
        <hr />
      </div>
      <About settings={settings?.data || {}}/>
      <Process />
    </>
  );
}
