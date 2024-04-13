import "./CostList.css"
import React, {useState} from "react"
import CostItem from './CostItem';

const CostList=(props)=>{

    console.log(props)
    return (
        <ul className="cost-list">
        {props.newCosts.length===0?<h2 className="cost-list__fallback">В Этом году нет расходов</h2>:props.newCosts.map((cost)=> (
            <CostItem 
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
            />
       ))}
       </ul>
    )
}

export default CostList