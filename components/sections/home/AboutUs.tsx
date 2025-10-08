import React from "react";
import { DynamicHeading } from "../ui/DynamicHeading";
import {
  ClockIcon,
  FireIcon,
  LockClosedIcon,
} from "@node_modules/@heroicons/react/24/outline";

export const AboutUs = () => {
  return (
    <section className="py-32 ">
      <div className="container">
        <DynamicHeading
          beforeText="Get to"
          highlightOne="Know Us"
          highlightTwo=" Better!"
        />

        <div className="grid xl:grid-cols-2 mt-20 gap-10">
          <img src="/images/hero-burger.avif" className="rounded-3xl" alt="" />
          <div className="py-4 flex flex-col justify-center">
            <div className="border-b border-gray-900 pb-8 mb-8">
              <h3 className="text-4xl font-bold text-gray-700">Our Mission</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ipsum animi in suscipit labore? Esse, ipsam expedita.
                Voluptatem omnis officia tenetur labore! Officiis et praesentium
                fugiat, consectetur ipsa optio fuga.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-700">Our Vision</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ipsum animi in suscipit labore? Esse, ipsam expedita.
                Voluptatem omnis officia tenetur labore! Officiis et praesentium
                fugiat, consectetur ipsa optio fuga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
