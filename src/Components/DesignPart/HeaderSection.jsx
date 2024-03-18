import wallpaper from "../img/wallpaper.jpg";
const HeaderSection = () => {
  return (
    <div>
      <div className=" mx-2 mt-4 font-lexend lg:mx-16">
        <div
          className=" lg:h-[500px] mx-8 rounded-2xl text-center "
          style={{
            backgroundImage: `url(${wallpaper})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className=" text-yellow-500 opacity-80 lg:text-[52px] font-bold lg:pt-28 pb-24 lg:pb-0 ">
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>
          <p className="hidden lg:block text-lg  font-normal opacity-70 text-white mt-5   ">
            The Food Studio celebrates the rich cultural heritage of Africans
            and
            <br /> African Americans across the diaspora, recognizing food and
            music as integral{" "}
          </p>
          <div className=" gap-5 mx-auto lg:inline-flex mt-8 hidden ">
            <button className="bg-rose-500 rounded-full p-4 text-white font-medium ">
              Explore Now
            </button>
            <button className="text-white border-2 rounded-full p-4 border-yellow-500">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
