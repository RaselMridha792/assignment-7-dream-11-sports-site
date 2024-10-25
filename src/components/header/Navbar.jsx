import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
const Navbar = ({credits}) => {
  return (
    <>
      <div id="navbar" className="navbar py-5 px-0 fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur p-4 z-50 max-w-screen-2xl mx-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 gap-3 p-2 shadow"
          >
            <a href="/" className="hover:text-black">
              <li>Home</li>
            </a>
            <a className="hover:text-black">
              <li>Fixture</li>
            </a>
            <a className="hover:text-black">
              <li>Teams</li>
            </a>
            <a className="hover:text-black">
              <li>Schedules</li>
            </a>
          </ul>
        </div>
        <div className="navbar-start">
          <img src={logo} alt="" />
        </div>
        <div className="navbar navbar-end gap-5">
          <ul className="navbar navbar-end gap-5 text-gray-500 text-lg hidden md:flex">
            <a className="hover:text-black">
              <li>Home</li>
            </a>
            <a className="hover:text-black">
              <li>Fixture</li>
            </a>
            <a className="hover:text-black">
              <li>Teams</li>
            </a>
            <a className="hover:text-black">
              <li>Schedules</li>
            </a>
          </ul>
          <button className="py-3 px-8 border rounded-lg">
            <p className="font-bold">${credits} coin</p>
            <img
              className="w-8"
              src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  credits: PropTypes.number
}

export default Navbar;
