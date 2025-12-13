import { socialMediaLinks } from "@constants/footer";
import { ElementAnimated } from "@components/animated/ElementAnimated";

export const SocialMediaLinks = () => {
  return (
    <div className="flex gap-8 flex-1 justify-end order-1 sm:order-2">
      {socialMediaLinks.map((link, index) => (
        <a
          key={link.title}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors size-5 fill-gray-400 hover:fill-gray-200 "
        >
          <ElementAnimated
            initial={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <link.Icon />
          </ElementAnimated>
        </a>
      ))}
    </div>
  );
};
