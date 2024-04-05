import LeftSideContent from "./LeftSideContent";
import MidleContent from "./MidleContent";
import RigthSideContent from "./RigthContent";



const Layout = ({news}) => {
    console.log(news);
    return (
        <div className="grid grid-cols-1 md:grid-cols-4  gap-6 border-2 p-4" >
            <div className="border"><LeftSideContent></LeftSideContent> </div>
            <div className="col-span-2 border p-4"> <h1 className="text-2xl font-semibold">Dragon News Home</h1> {
                
                news.map( aNews => <MidleContent key={aNews.id} news={aNews}></MidleContent>)
            }  </div>
            <div className="border"> <RigthSideContent></RigthSideContent> </div>
        </div>
    );
};

export default Layout;