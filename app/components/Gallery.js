import React from "react";
import Text from "./Text";

const Gallery = () => {
  return (
    <section className="py-12">
      <div className="container flex flex-col justify-center p-4 mx-auto">
        <Text size="display" className="mb-6">
          Lineup
        </Text>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
          <img
            className="object-cover w-full bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/300x300/?1"
          />
          <img
            className="object-cover w-full bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/300x300/?2"
          />
          <img
            className="object-cover w-full bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/300x300/?3"
          />
          <img
            className="object-cover w-full bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/300x300/?4"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
