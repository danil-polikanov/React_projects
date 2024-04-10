import './Costs.css';
import CostItem from './CostItem';
import CostFilter from './CostFilter';
import Card from '../UI/Card';
import React, {useState} from "react"

function Costs(props){

    useState(props.description);
    const [selectedYear,setSelectedYear]= useState('2021');
    const yearChangeHandler = (year) => {
        setSelectedYear(year)
      };

    return (
        <div>
            <Card className="costs">
            <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}></CostFilter>
                {props.costs.map((cost)=> (
                     <CostItem 
                     date={cost.date}
                     description={cost.description}
                     amount={cost.amount}
                     />
                ))}
            </Card>
        </div>
    )
}

export default Costs;