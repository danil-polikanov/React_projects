import './Costs.css';
import CostItem from './CostItem';
import CostFilter from './CostFilter';
import Card from '../UI/Card';
import React, {useState} from "react"
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

function Costs(props){

    
    useState(props.description);
    const [selectedYear,setSelectedYear]= useState('2021');
    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    };
    const filtredCosts=props.costs.filter((cost)=>cost.date.getFullYear().toString()===selectedYear)



    return (
        <div>
            <Card className="costs">
            <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}></CostFilter>
            <CostsDiagram costs={filtredCosts}></CostsDiagram>
            <CostList newCosts={filtredCosts}></CostList>
            </Card>
        </div>
    )
}

export default Costs;