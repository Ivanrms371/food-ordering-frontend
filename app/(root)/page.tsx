import { Hero } from "@/components/sections/home/Hero";
import { AboutUs } from "@/components/sections/home/about-us/AboutUs";
import { PopularMenu } from "@/components/sections/home/popular-menu/PopularMenu";
import { Reviews } from "@/components/sections/home/reviews/Reviews";
import { Gallery } from "@/components/sections/home/Gallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <PopularMenu />
      <Reviews />
      <Gallery />
    </>
  );
}
