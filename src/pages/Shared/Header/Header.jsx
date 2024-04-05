import moment from "moment";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="text-center space-y-2 mb-3">
        <img className="mx-auto" src={logo} alt="" />
        <h1 className="">Journalism Without Fear or Favour</h1>
        <h1 className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</h1>
      </div>
      <div className="flex items-center text-black  gap-4 bg-gray-200 px-5 py-1 ">
        <button className="btn  btn-secondary px-4  rounded-none">Latest</button>
        <Marquee pauseOnHover={true}>
        <Link className="mr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit 
        </Link>
        <Link className="mr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit 
        </Link>
        <Link className="mr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit 
        </Link>
        </Marquee>
        
      </div>
    </div>
  );
};

export default Header;
