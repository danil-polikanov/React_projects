import CostForm from './CostForm';
import './InputCosts.css';
import React,{useState} from 'react';


const InputCosts=(props) => {
    const[isInputOn,setisInputOn]=useState(false);
    const saveCostDataHandler=(inputCostData)=>
    {
        const costData={
            ...inputCostData,
        }
        props.onAddCost(costData);
        setisInputOn(false);
    }
    const inputCostDataHandler=()=>{
        setisInputOn(true);
    }
    const cancelInputCostDataHandler=()=>{
        setisInputOn(false);
    }
    return (
        <div className='new-cost'>
            {!isInputOn && <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>}
            {isInputOn && <CostForm onSaveCostData={saveCostDataHandler} onCancelButton={cancelInputCostDataHandler}></CostForm>}
        </div>
    );
}

export default InputCosts