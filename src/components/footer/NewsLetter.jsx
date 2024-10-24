import bannerBg from "../../assets/banner.png";
const NewsLetter = () => {
  return (
    <>
    <section className="rounded-3xl mb-[-176px] sticky">
    <div className="max-w-screen-2xl mx-auto border rounded-3xl shadow-xl border-white border-2">
        <div
          className="hero rounded-3xl border big-border"
          style={{
            backgroundImage:
               `url(${bannerBg})`,
          }}
        >
          <div className="hero-overlay bg-gradient-to-r from-sky-100 via-gray-50 to-orange-200"></div>
          <div className="hero-content text-neutral-content text-center py-20 rounded-3xl">
            <div className="">
              <h1 className="mb-5 text-4xl font-bold text-black">
                Subscribe to our Newsletter
              </h1>
              <p className="mb-5 text-gray-600">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered w-full max-w-xs"
                />
                <button className="btn linear-btn border-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default NewsLetter;
