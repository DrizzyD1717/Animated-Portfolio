import Image from "next/image";

export default function Homepage() {
  return (
    <div className="flex flex-col h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row">
      {/* Image Container  */}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image src="/hero.png" alt="" fill className="object-contain"></Image>
      </div>
      {/* Text Container  */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
        {/* Title  */}
        <h1 className="text-4xl font-bold md:text-6xl">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        {/* Description  */}
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          possimus molestias aspernatur veniam eius, cum error in deserunt sed
          quos nemo voluptates sequi itaque odio. Ad ipsa deserunt
          necessitatibus ipsam.
        </p>
        {/* Buttons  */}
        <div className="flex gap-4 w-full">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
