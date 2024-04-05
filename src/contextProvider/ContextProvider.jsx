import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config/Firbase.config";
// import {useNavigation} from 'react-router-dom'


 export const AuthContext = createContext(null)

const ContextProvider = ({children}) => {
    const [user , setUser] =useState(null)
    const [loading, setLoading] = useState(true)
    // const navigation = useNavigation();
  // console.log(newsData);
//   if (navigation.state === "loading") {
//     <div className="flex items-center justify-center space-x-2">
//       <span className="loading loading-bars loading-xs"></span>
//       <span className="loading loading-bars loading-sm"></span>
//       <span className="loading loading-bars loading-md"></span>
//       <span className="loading loading-bars loading-lg"></span>
//     </div>;
//   }
   
    const signUp =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const Logout =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const  unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           if (currentUser) {
             setUser(currentUser);
             setLoading(false)
           } else{
           //    console.log('logOut Successfull');
           setUser(null)
           }
           return ()=>{
               unsubscribe()
           }
         });
     },[])
    //  console.log(user);
    const data = {user, signUp,login,Logout,loading}
    return (
        <div>
            <AuthContext.Provider value={data}>
                {
                    children
                }
            </AuthContext.Provider>
            
        </div>
    );
};

export default ContextProvider;