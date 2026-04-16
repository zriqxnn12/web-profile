import HeroImage from "../assets/images/my-profile.jpeg";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-2 px-5 py-24 lg:py-28 lg:px-10 xl:px-28 xl:py-36">
        <div>
          <p className="text-[#808080] py-1 text-lg lg:text-xl">
            Hey, I'm Azriqin👋
          </p>
          <h1 className="text-6xl xl:text-7xl font-extrabold tracking-tighter">
            <span className="text-[#4E56C0]">Front</span>end Developer
          </h1>
          <p className="text-[#808080] text-lg lg:text-xl mt-4 leading-5">
            I’am a junior frontend developer based in Indonesia, i’ll help you
            to build beautiful websites your users will love.
          </p>
          <div className="mt-5">
            <button className="bg-[#7980DC] text-white text-sm px-4 py-2 md:text-base shadow-lg rounded-lg hover:bg-[#6369c2]">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="flex justify-center xl:justify-end">
          <div className="w-56 h-56 xl:w-80 xl:h-80 mt-14 lg:mt-0 border border-[#9F9D9D] rounded-full content-center">
            <img
              src={HeroImage}
              alt="Profile"
              className="w-40 h-40 xl:w-56 xl:h-56 mx-auto object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="px-5 py-24 lg:px-10 xl:px-28">
        <h2 className="text-3xl font-bold mb-4 uppercase">About Me</h2>
        <p className="text-[#808080] text-lg lg:text-xl leading-6">
          I'm a passionate{" "}
          <span className="text-[#4E56C0] font-semibold">
            frontend developer
          </span>{" "}
          with a keen eye for design and a love for creating intuitive user
          experiences. With a strong foundation in HTML, CSS, and JavaScript, I
          strive to build responsive and accessible websites that not only look
          great but also perform exceptionally well. <br /> <br />
          Known for collaborative problem-solving skills and a commitment to
          continuous learning, I am dedicated to staying up-to-date with the
          latest industry trends and technologies. Whether working on a team or
          independently, I am always eager to take on new challenges and
          contribute to projects that make a positive impact.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
