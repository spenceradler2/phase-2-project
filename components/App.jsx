import React, { useEffect, useState } from "react";
import Header from "./Header";
import TravelPlanList from "./TravelPlanList.jsx";
import NewTravelForm from "./NewTravelForm";

function App() {

  const [travelPlans, setTravelPlans] = useState([])
  const [term, setTerm] = useState("")
  let viewedTravelPlans

  function addTravelPlans(newTravelPlan){
    setTravelPlans([...travelPlans, newTravelPlan])
  }

  useEffect(() => {
    fetch("http://localhost:6001/travelPlans")
      .then((resp) => resp.json())
      .then(data => {setTravelPlans(data)})
    }, [])

      
      if(term === "Type a name to search...") {
        viewedTravelPlans = travelPlans
      } else {
        viewedTravelPlans = travelPlans.filter(travelPlan => travelPlans.name.toLowerCase().includes(term.toLowerCase()))
      }

  return (
    <div className="app">
    <Header />
    <NewTravelForm 
      addTravelPlans={addTravelPlans}
      />
    <TravelPlanList 
        travelPlans = {viewedTravelPlans}
        setTerm={setTerm}
        term={term}
      />
    </div>
    
)}
export default App;
