import About from "./About/About.jsx";
// import Header from "./Header.jsx"
// import Hero from "./Hero.jsx"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Contact from "./ContactUs/Contact.jsx";
import Error from "./HomePage/Error.jsx";
// import SignIn from "./SignIn/SignIn.jsx";

let routes = createBrowserRouter([
  {path:"/" , element:<HomePage></HomePage> , errorElement:<Error></Error>,
  children:[],
},
  {path:"/About" , element:<About></About>, errorElement:<Error></Error>},
  {path:"/Contactus" , element:<Contact></Contact>, errorElement:<Error></Error>},
  // {path:"/SignIn" , element:<SignIn></SignIn>, errorElement:<Error></Error>},
 

])

function App() {
  return (
    
    <>

    <div>
      <RouterProvider router={routes}></RouterProvider>
      {/* <Hero></Hero> */}
    </div>
    </>
  )
}

export default App
