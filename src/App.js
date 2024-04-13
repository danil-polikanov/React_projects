import CostItem from "./components/Costs/CostItem";
import Costs from "./components/Costs/Costs";
import InputCosts from "./components/InputCosts/InputCosts";
import React,{useState} from "react";

function App() {

  const InitialCosts=[
  {
    id:"1",
    date:new Date(2021,5,30),
    description:'Холодильник',
    amount:999.99
  },
  {
    id:"2",
    date:new Date(2022,5,30),
    description:'MacBook',
    amount:1254.72
  },
  {
    id:"3",
    date:new Date(2022,5,6),
    description:'Djin',
    amount:50
  }
  ];
  const [costs,setCosts]=useState(InitialCosts);

  const addCostHandler=(cost)=>{
    setCosts(prevCosts=>{
      return [cost,...prevCosts]
    });
  }
  return (
   <div>
    <InputCosts onAddCost={addCostHandler}></InputCosts>
    <Costs costs={costs}></Costs>
    </div>
  );
}

export default App;
