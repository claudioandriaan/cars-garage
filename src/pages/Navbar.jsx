import logo from "../assets/log-2.png";
import ico from "../assets/menu.png";
import fleche from "../assets/fleche.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div className="flex flex-col justify-around lg:gap-[135px] md:gap-[180px] h-[100vh]">
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between lg:mx-auto md:mx-auto lg:p-[4rem] md:p-[3rem]  sm:p-[1.5rem]">
          <div className="flex gap-5 cursor-pointer">
            <img className="w-[40px] h-auto" src={logo} alt="logo" />
            <h1 className="font-extrabold">
              CLAUDIO <br />
              GARAGE
            </h1>
          </div>
          <div className="icon">
            <a href="#">
              <img
                src={ico}
                className="w-[50px] h-auto color-white"
                alt="menu icons"
              />
            </a>
          </div>
        </div>
      </nav>
      <div className="lg:w-[90%] md:w-[90%] mx-auto ">
        <div className="lg:flex md:flex items-center lg:justify-between md:justify-between ml-[30px] lg:p-4 sm:ml-[10px] sm:flex-none">
          <div className="left">
            <h1 className="lg:text-7xl md:text-4xl text-6xl  font-extrabold uppercase mt-[60px] mb-[2rem]">
              Let's Get You <br />{" "}
              <span className="text-red-700">on the Road</span>
            </h1>
          </div>
          <div className="flex items-center lg:space-x-6 md:space-x-6  bg-red-700 gap-3 lg:h-[40px] md:h-[40px]  rounded-full lg:mr-[50px] md:mr-[50px]  lg:ml-[7px] md:ml-[7px] px-7 py-5 mt-3 sm:px-3 cursor-pointer	hover:animate-bounce delay-100">
            <button className="text-lg uppercase md:text-md">
              {" "}
              Request a quote{" "}
            </button>
            <img
              className="lg:w-[30px] md:w-[30px] w-[25px] "
              src={fleche}
              alt="fleche"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
