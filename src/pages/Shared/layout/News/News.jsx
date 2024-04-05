import Header from "../../Header/Header";
import Nabvar from "../../Navbar/Nabvar";
import RigthSideContent from "../RigthContent";
import { useParams } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Nabvar></Nabvar>
      <div className="grid grid-cols-4">
        <div className="col-span-3 p-4">
          <h2 className="text-2xl font-semibold"> News Details</h2>
          <div className=" border-2 rounded-xl ">
            <p>{id}</p>
          </div>
        </div>
        <div>
          <RigthSideContent></RigthSideContent>
        </div>
      </div>
    </div>
  );
};

export default News;
