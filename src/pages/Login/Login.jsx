import { Link } from "react-router-dom";
import Nabvar from "../Shared/Navbar/Nabvar";
import { useContext } from "react";
import { AuthContext } from "../../contextProvider/ContextProvider";
import {useLocation,useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
    const {login} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    // console.log(name);
  const handleSubmitLogin = e=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    //  console.log(email,password);
      login(email,password)
      .then(result => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.log(error)
      })
    // console.log(user);
  }

  return (
   <div> 
    <Nabvar></Nabvar>
     <div className="flex flex-col max-w-md mx-auto border-2 bg-base-200 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Login</h1>
        <p className="text-sm dark:text-gray-600">
          Login to access your account
        </p>
      </div>
      <form  onSubmit={handleSubmitLogin} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
          <label htmlFor="password" className="text-sm">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button 
            
              type="submit"
              className="w-full px-8 btn btn-secondary hover:bg-pink-700 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Login
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Dont have an account yet?
            <Link 
              to='/register'
              className="hover:underline ml-4 dark:text-violet-600"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
   </div>
  );
};

export default Login;
