import { FacebookIcon } from "@components/icons/FacebookIcon";
import { InstagramIcon } from "@components/icons/InstagramIcon";
import { TIktokIcon } from "@components/icons/TIktokIcon";
import { TwitterIcon } from "@components/icons/TwitterIcon";
import {
  ChatBubbleBottomCenterTextIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export const footerItems = [
  {
    Icon: ChatBubbleBottomCenterTextIcon,
    title: "About us",
    description: ["Enjoy a wonderful cafe dining experience"],
  },
  {
    Icon: PhoneIcon,
    title: "Let's talk",
    description: ["Phone: +123 456 789", "Email: info@cafe.com"],
  },
  {
    Icon: MapPinIcon,
    title: "Find us",
    description: ["1382 Avda Italia, Montevideo,", "Uruguay"],
  },
  {
    Icon: ClockIcon,
    title: "Opening Hours",
    description: ["Mon–Fri: 11:00 – 23:00", "Sat–Sun: 12:00 – 00:00"],
  },
];

export const socialMediaLinks = [
  {
    Icon: FacebookIcon,
    title: "Facebook",
    url: "https://www.facebook.com/",
  },
  {
    Icon: InstagramIcon,
    title: "Instagram",
    url: "https://www.instagram.com/",
  },
  {
    Icon: TwitterIcon,
    title: "Twitter",
    url: "https://www.twitter.com/",
  },
  {
    Icon: TIktokIcon,
    title: "Tiktok",
    url: "https://www.tiktok.com/",
  },
];
