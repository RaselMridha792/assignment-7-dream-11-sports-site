import bannerBg from "../../assets/banner.png";
import bannerMain from "../../assets/banner-main.png";
const Banner = () => {
  return (
    <>
      <div
        className="hero rounded-2xl bg-black py-20 bg-opacity-90 mb-20"
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="items-center justify-center flex flex-col">
            <img className="py-5" src={bannerMain} alt="" />
            <h1 className="mb-5 text-5xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5 text-gray-500 font-bold">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="border border-2 rounded-lg border-[#E7FE29] hover:btn-outline">
              <button className="btn btn-main border border-black border-4 hover:btn-outline text-lg">
                claim free credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
