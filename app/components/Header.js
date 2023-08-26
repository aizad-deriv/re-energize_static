import React from "react";
import Text from "./Text";
const Header = () => {
  return (
    <section>
      <div className="container h-screen flex justify-center flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
        <Text size="display">RE:ENERGIZED FESTIVAL</Text>
        <Text className="mt-6 mb-8 sm:mb-12 xl:max-w-3xl">
          Experience an unforgettable fusion of performances, beats, and
          melodies. Join us for a euphoric celebration of music, unity, and
          unforgettable memories on the specified date.
        </Text>
        <div className="flex flex-wrap justify-center">
          <button
            type="button"
            className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900"
          >
            Get started
          </button>
          <button
            type="button"
            className="px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
