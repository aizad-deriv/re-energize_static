import React from "react";
import Text from "./Text";

const Pricing = () => {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <Text size="display" className="mb-6">
          Pricing
        </Text>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col items-center justify-center flex-1 p-5 pb-8 sm:p-8 lg:p-16 bg-gray-950 space-y-6 aspect-square">
            <Text size="md" className="font-semibold">
              Early Bird
            </Text>
            <Text size="lg">RM200</Text>
            <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 border-gray-300">
              Buy Now
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 p-5 pb-8 text-center sm:p-8 lg:p-16 border-gray-950 space-y-6 aspect-square">
            <Text size="md" className="font-semibold">
              Regular Entry
            </Text>
            <Text size="lg">RM200</Text>
            <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-gray-100 text-gray-900">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
