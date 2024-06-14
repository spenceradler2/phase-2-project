import React from "react";
import Search from "./Search";


function TravelPlanList( {travelPlans, setTerm, term,}) {
  
  const travelPlanCards = travelPlans.map((travelPlan) => (
    key={ travelPlan.id } 
    name={ travelPlan.name } 
    location= {travelPlan.location}
    iframe={ travelPlan.iframe } ))
  
  return (
    <main>
      <Search setTerm={setTerm} term={term}/>
      <div className="cards">
      <li className="card">
      <h4>Name: {`${name}`}</h4>
      <h4>Price: {`${location}`}</h4>
      <iframe src={iframe} width="600" height="450" style={{border:0}}><iframe/>
      </li>
      </div>  
    </main>
  );
}

export default TravelPlanList;
