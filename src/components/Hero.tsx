import HeroText from "./HeroText";

export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-center py-12 md:py-0">
        <div className="max-w-screen-xl px-4 lg:px-16">
          <HeroText />
        </div>
      </div>
      <div
        className="w-full object-cover h-72 lg:w-full md:h-screen bg-cover bg-center hidden md:block"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6424587/pexels-photo-6424587.jpeg')",
        }}
      ></div>
    </>
  );
}
