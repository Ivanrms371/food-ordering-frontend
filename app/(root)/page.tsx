import { AboutUs } from "@components/sections/home/AboutUs";
import { FeaturedMenu } from "@components/sections/home/FeaturedMenu";
import { FinalCTA } from "@components/sections/home/FinalCTA";
import { Hero } from "@components/sections/home/Hero";
import { HowItWorks } from "@components/sections/home/HowItWorks";
import { Promotions } from "@components/sections/home/Promotions";
import { Testimonials } from "@components/sections/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeaturedMenu />
      <Promotions />
      <Testimonials />
      <FinalCTA />
      <AboutUs />
    </>
  );
}
