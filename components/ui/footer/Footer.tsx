"use client";
import {
  ChatBubbleBottomCenterTextIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { BrandLogo } from "../BrandLogo";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FooterGrid } from "./FooterGrid";
import { TextBlockAnimated } from "@/components/animated/TextBlockAnimated";
import { ElementAnimated } from "@/components/animated/ElementAnimated";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 67.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.25]);

  return (
    <footer className="bg-gray-950 mt-40">
      <div className="relative overflow-hidden" ref={ref}>
        <div className="container py-10">
          {/* <div className="absolute flex justify-center left-1/2 w-full -translate-x-1/2 -top-42 md:-top-50 lg:-top-80">
            <motion.img
              src="/footer-image.png"
              alt="Footer Pizza Image"
              style={{ rotate, scale }}
              className="w-[320px] md:w-[400px] lg:w-[550px]"
            />
          </div> */}
          <FooterGrid />
        </div>

        <div className="mt-10 border-t border-gray-900">
          <div className="container py-10">
            <div className="flex flex-col-reverse gap-10 sm:flex-row justify-between items-center">
              <TextBlockAnimated
                className="flex-1"
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-gray-400">
                  © 2025 Ivexus. All rights reserved.
                </p>
              </TextBlockAnimated>
              <ElementAnimated
                initial={{ opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-2 sm:order-1"
              >
                <BrandLogo className="size-12" effect={false} />
              </ElementAnimated>
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
