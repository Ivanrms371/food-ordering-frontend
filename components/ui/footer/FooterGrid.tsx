import { footerItems } from "@/constants/footer";
import { ElementAnimated } from "@/components/animated/ElementAnimated";
import { TextBlockAnimated } from "@/components/animated/TextBlockAnimated";

export const FooterGrid = () => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
      {footerItems.map((item, index) => (
        <li key={item.title}>
          <div className="flex flex-col items-center gap-2">
            <ElementAnimated
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5, once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="size-20 p-7 bg-gray-800 rounded-full border-gray-700 border shadow-gray-900"
            >
              <item.Icon className="size-6 text-gray-300" />
            </ElementAnimated>

            <TextBlockAnimated
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
            >
              <h3 className="text-2xl font-mono text-gray-300">{item.title}</h3>
            </TextBlockAnimated>

            {item.description.map((description, i) => (
              <TextBlockAnimated
                key={description}
                initial={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.2 + i * 0.1,
                }}
              >
                <p className="text-gray-400">{description}</p>
              </TextBlockAnimated>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
