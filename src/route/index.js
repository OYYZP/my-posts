 import Loginpage from "../page/Login"
 import Homepages from "../page/home_pages"
 const routes=  [
    {
        path:'/',
        element:<Loginpage/>
    },
    {
        path:'/home',
        element:<Homepages/>
    }
]
export default routes