import footerbg from "../../assets/logo-footer.png"
import NewsLetter from "./NewsLetter";
const Footer = () => {
  return (
    <>
    <NewsLetter></NewsLetter>
      <div className="bg-black pt-48">
        <div className="flex items-center justify-center py-10">
            <img className="" src={footerbg} alt="" />
        </div>
        <footer className="footer flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto text-base-content p-10">
          <div className="text-gray-400 flex flex-col md:flex-row md:gap-24">
          <div className="w-2/4">
            <h6 className="text-white uppercase font-bold text-xl">About Us</h6>
            <p className="text-gray-400">We are a passionate team dedicated to providing the best services to our customers.</p>
          </div>
          <div>
          <h6 className="text-white uppercase font-bold text-xl">Quick Links</h6>
            <li className="link link-hover">Home</li>
            <li className="link link-hover">Service</li>
            <li className="link link-hover">About</li>
            <li className="link link-hover">Contact</li>
          </div>
          </div>
          <div>
            <form className="text-xl">
              <h6 className="text-white uppercase font-bold text-xl">Subscribe</h6>
              <fieldset className="form-control">
                <label className="label">
                  <span className="label-text text-gray-400 font-bold md:w-3/4">Subscribe to our newsletter for the latest updates.</span>
                </label>
                <div className="flex join">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs join-item" />
                <button className="btn linear-btn join-item border-none">subscribe</button>
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
