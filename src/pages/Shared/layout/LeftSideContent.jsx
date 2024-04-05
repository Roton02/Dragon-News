import { CiCalendarDate } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const LeftSideContent = () => {

    const [categories , setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then((res => res.json()))
        .then((data => setCategories(data)))
    },[])
    // console.log(categories);

    return (
        <div className="p-4 ">
            <h2 className="text-2xl font-semibold"> All Caterogy</h2>
            {
                categories.map((category => <Link key={category.id} to={`categories/${category.id}`} className="block text-xl hover:bg-gray-200 ml-8 mt-4 p-3 rounded-lg">{category.name}</Link>))
            }
            <div>
                <div className="mt-10">
                    <img src="https://i.ibb.co/x2ZTWG9/Rectangle-3986.png" alt="" />
                    <h1 className="text-xl font-semi-bold ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className="flex justify-between mt-3">
                    <p>Sports</p>
                        <p className="flex items-center justify-center gap-2"> <CiCalendarDate></CiCalendarDate> {moment().format(" MMM, d, YYYY")}</p>
                    </div>
                </div>
                <div className="mt-10">
                    <img src="https://i.ibb.co/TgSZ7Jk/Rectangle-3986-1.png" alt="" />
                    <h1 className="text-xl font-semi-bold ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className="flex justify-between mt-3">
                    <p>Sports</p>
                        <p className="flex items-center justify-center gap-2"> <CiCalendarDate></CiCalendarDate>{moment().format(" MMM, d, YYYY")}</p>
                    </div>
                </div>
                <div className="mt-10">
                    <img src="https://i.ibb.co/G0k4TCF/Rectangle-3986-2.png" alt="" />
                    <h1 className="text-xl font-semi-bold ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className="flex justify-between mt-3">
                        <p>Sports</p>
                        <p className="flex items-center justify-center gap-2"> <CiCalendarDate></CiCalendarDate> {moment().format(" MMM, d, YYYY")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideContent;