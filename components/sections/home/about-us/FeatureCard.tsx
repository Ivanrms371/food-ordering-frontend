import { ElementAnimated } from "@/components/animated/ElementAnimated";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { SVGProps } from "react";

interface Props {
  feature: {
    Icon: ForwardRefExoticComponent<
      Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
      } & RefAttributes<SVGSVGElement>
    >;
    title: string;
    description: string;
  };
  index: number;
}

export const FeatureCard = ({ feature, index }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:text-left text-center gap-4 items-center">
      <ElementAnimated
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="size-20 p-7 bg-gray-800 rounded-full"
      >
        <feature.Icon className="size-6 text-gray-300" />
      </ElementAnimated>
      <ElementAnimated
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.5, delay: index * 0.25 }}
      >
        <h3 className="text-2xl font-mono text-gray-200">{feature.title}</h3>
        <p className="text-gray-400">{feature.description}</p>
      </ElementAnimated>
    </div>
  );
};
