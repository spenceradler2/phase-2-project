import App from "./App";
import Home from "./Home";
import Profile from "./Profile";
import SpecificProfile from "./SpecificProfile";

export default [
  {
    path: "/",
    element: <App />,
    children: [
       {
        path: "/Home",
        element: <Header />
      }, 
      {
        path: "/NewTravelForm",
        element: <NewTravelForm />
      },
      {
        path: "/TravelPlanList",
        element: <TravelPlanList />,
      }
    ]
  }
  
]