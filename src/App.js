import CostItem from "./components/CostItem";

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
    <h1>React-Test</h1>
    <CostItem date={costs[0].date}
     description={costs[0].description}
     amount={costs[0].amount}></CostItem>
    <CostItem date={costs[1].date}
     description={costs[1].description}
     amount={costs[1].amount}></CostItem>
    <CostItem date={costs[2].date}
     description={costs[2].description}
     amount={costs[2].amount}></CostItem>
    </div>
  );
}

export default App;
