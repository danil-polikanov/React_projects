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
                <CostItem date={props.costs[0].date}
                description={props.costs[0].description}
                amount={props.costs[0].amount}></CostItem>
                <CostItem date={props.costs[1].date}
                description={props.costs[1].description}
                amount={props.costs[1].amount}></CostItem>
                <CostItem date={props.costs[2].date}
                description={props.costs[2].description}
                amount={props.costs[2].amount}></CostItem>
            </Card>
        </div>
    )
}

export default Costs;