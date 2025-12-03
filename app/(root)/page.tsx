import { AboutUs } from "@components/sections/home/AboutUs";
import { FinalCTA } from "@components/sections/home/FinalCTA";
import { Hero } from "@components/sections/home/Hero";
import { PopularMenu } from "@components/sections/home/popular-menu/PopularMenu";
import { Promotions } from "@components/sections/home/Promotions";
import { Testimonials } from "@components/sections/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <PopularMenu />
      <Promotions />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
