import { Link, NavLink } from "react-router-dom";
import NavPhoto from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../contextProvider/ContextProvider";

const Nabvar = () => {

  

      const {user,  Logout} = useContext(AuthContext)
    const handdleLogOut =()=>{
      Logout()
      .then(result =>{
        console.log(result);
      })
      .catch(error =>{
        console.log(error);
      })
    }
    const NavLinks = <>
         <li>   <NavLink to='/'> Home </NavLink> </li>
         <li className="mx-2">   <NavLink to='/about'> About </NavLink> </li>
         <li>   <NavLink to='/career' > Career </NavLink> </li> 
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  ">
       {NavLinks}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {NavLinks}
    </ul>
  </div>
  <div className="navbar-end gap-2">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={NavPhoto} />
        </div>
      </div>
      {
        user ? 
        <button onClick={handdleLogOut} className="btn btn-active btn-neutral px-7 rounded-none">Logout</button>:
        <Link to='/login'><button className="btn btn-active btn-neutral px-7 rounded-none">Login</button></Link>
      }
    
  </div>
</div>
    );
};

export default Nabvar;