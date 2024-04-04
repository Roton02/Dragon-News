import moment from 'moment';
const Nabvar = () => {
    return (
        <div className="flex flex-col items-center justify-center my-3 space-y-2 "> 
            <h1 className="">Journalism Without Fear or Favour</h1>
            <h1 className="text-xl">{moment().format('dddd, MMMM D, YYYY')}</h1>
        </div>
    );
};

export default Nabvar;