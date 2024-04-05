import Header from "../Shared/Header/Header";
import Nabvar from "../Shared/Navbar/Nabvar";
import Layout from "../Shared/layout/Layout";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const newsData = useLoaderData();
 
  return (
    <div>
      <Header></Header>
      <Nabvar></Nabvar>
      <Layout news={newsData}></Layout>
    </div>
  );
};

export default Home;
