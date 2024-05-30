import Carousel from "@/components/Carousel/Carousel";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  return (
    <main className="flex-grow">
      <HomeHero />
      <Carousel />
      <Carousel />
      <Carousel />
    </main>
  );
}
