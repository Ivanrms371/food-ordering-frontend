import { ElementAnimated } from "@components/animated/ElementAnimated";
import { TextBlockAnimated } from "@components/animated/TextBlockAnimated";
import { footerItems } from "@constants/footer";

export const FooterGrid = () => {
  return (
    <ul className="grid grid-cols-1 sm:rid-cols-2 lg:grid-cols-4 gap-15 mt-32 md:mt-64">
      {footerItems.map((item, index) => (
        <li
          key={index}
          className="flex flex-col gap-2 items-center text-center"
        >
          <ElementAnimated
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="size-20 p-7 bg-gray-800 rounded-full"
          >
            <item.Icon className="size-6 text-gray-300" />
          </ElementAnimated>
          <TextBlockAnimated
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            <h3 className="text-gray-300 font-mono text-3xl">{item.title}</h3>
          </TextBlockAnimated>
          <div className="text-gray-400">
            {item.description.map((desc, i) => (
              <TextBlockAnimated
                initial={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.4 + i * 0.1,
                }}
                key={i}
              >
                <p>{desc}</p>
              </TextBlockAnimated>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
