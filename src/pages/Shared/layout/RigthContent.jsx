import { FcGoogle } from "react-icons/fc";
import { FaFacebook,FaTwitter ,FaInstagram,FaGithub   } from "react-icons/fa";
import QPhoto1 from '../../../assets/qZone1.png'
import QPhoto2 from '../../../assets/qZone2.png'
import QPhoto3 from '../../../assets/qZone3.png'
const RigthSideContent = () => {
  return (
    <div className="p-2">
      <div>
        <h2 className="text-2xl font-semibold"> Login With</h2>
        <a className="btn px-8 w-full mx-auto mt-2">
          <FcGoogle></FcGoogle>
          Login With Google
        </a>
        <a className="btn px-8 w-full mx-auto mt-2">
          <FaGithub></FaGithub>
          Login With Google
        </a>
      </div>
      <div className="mt-2">
        <h2 className="text-2xl mb-3 font-semibold"> Find On Us </h2>
        <div>
          <h1 className="w-full border-2 flex  p-4 rounded-t-lg ">
            <a className="bg-gray-200 p-2 mr-3 rounded-full" href="">
            <FaFacebook></FaFacebook>
            </a>
            Facebook
          </h1>
          <h1 className="w-full border-x-2 flex p-4  ">
            <a className="bg-gray-200 p-2 mr-3 rounded-full" href="">
                <FaTwitter></FaTwitter>
            </a>
            Tiwtter
          </h1>
          <h1 className="w-full border-2  flex p-4 rounded-b-lg ">
            <a className="bg-gray-200 p-2 mr-3 rounded-full" href="">
                <FaInstagram ></FaInstagram>
            </a>
            Instragram
          </h1>
          
        </div>
        <div className="bg-base-300 mt-4 p-4 space-y-3">
        <h2 className="text-2xl font-semibold"> Q-Zone</h2>
        <div className="bg-slate-50 p-3 mx-auto text-center rounded-lg">
            <img src={QPhoto1} alt="" />
        
        </div>
        <div  className="bg-slate-50 p-3 mx-auto text-center rounded-lg">
            <img src={QPhoto2} alt="" />
          
        </div>
        <div  className="bg-slate-50 p-3 mx-auto text-center rounded-lg">
            <img src={QPhoto3} alt="" />
          
        </div>

        </div>
      </div>
      <div className="px-4 py-14 bg-[url('https://i.ibb.co/YpJVJZw/bg.png')] text-white">
        <h1 className="text-4xl font-bold mb-5">Create an Amazing Newspaper</h1>
        <p className="mb-10">
        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
        </p>
        <div className="text-center">
        <button className="btn btn-secondary text-2xl  font-semibold">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RigthSideContent;
