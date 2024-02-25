import CostItem from "./components/Costs/CostItem";
import Costs from "./components/Costs/Costs";
import InputCosts from "./components/InputCosts/InputCosts";

function App() {

  const costs=[
  {
    date:new Date(2023,15,5),
    description:'Холодильник',
    amount:999.99
  },
  {
    date:new Date(2023,22,2),
    description:'MacBook',
    amount:1254.72
  },
  {
    date:new Date(2023,21,6),
    description:'Djin',
    amount:50
  }
  ];
  return (
   <div>
    <InputCosts></InputCosts>
    <Costs costs={costs}></Costs>
    </div>
  );
}

export default App;
