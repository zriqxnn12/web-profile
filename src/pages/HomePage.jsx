const HomePage = () => {
  return (
    <div className="px-6 py-10">
      {/* hero section */}
      <div className="w-64">
        <p className="text-[#808080] py-1">Hey, I'm Azriqin👋</p>
        <h1 className="text-4xl font-bold uppercase">
          <span className="text-[#4E56C0]">Front</span>end Enthusiast
        </h1>
        <p className="text-[#808080] text-sm py-2">
          I’am a frontend developer based in Indonesia, i’ll help you to build
          beautiful websites your users will love.
        </p>
        <div className="mt-2">
          <button className="bg-[#7980DC] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#6369c2]">
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
