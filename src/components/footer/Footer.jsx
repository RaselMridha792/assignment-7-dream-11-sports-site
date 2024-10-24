import footerbg from "../../assets/logo-footer.png"
import NewsLetter from "./NewsLetter";
const Footer = () => {
  return (
    <>
    <NewsLetter></NewsLetter>
      <div className="bg-black">
        <div className="flex items-center justify-center py-10">
            <img className="" src={footerbg} alt="" />
        </div>
        <footer className="footer flex justify-between max-w-screen-2xl mx-auto text-base-content p-10">
          <nav>
            <h6 className="text-white uppercase font-bold text-xl">About Us</h6>
            <p className="text-gray-400 w-2/4">We are a passionate team dedicated to providing the best services to our customers.</p>
          </nav>
          <nav className="text-gray-400">
            <h6 className="text-white uppercase font-bold text-xl">Quick Links</h6>
            <li className="link link-hover">Home</li>
            <li className="link link-hover">Service</li>
            <li className="link link-hover">About</li>
            <li className="link link-hover">Contact</li>
          </nav>
          <div>
            <form className="text-xl">
              <h6 className="text-white uppercase font-bold text-xl">Subscribe</h6>
              <fieldset className="form-control">
                <label className="label">
                  <span className="label-text text-gray-400 font-bold">Subscribe to our newsletter for the latest updates.</span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered join-item"
                  />
                  <button className="btn linear-btn join-item border-none">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </footer>
        <hr className="border border-gray-700 border-1"/>
        <div className="text-center text-gray-400 py-10">
            <h1>@2024 RaselMridha All Rights Reserved.</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
