import CostForm from './CostForm';
import './InputCosts.css';


const InputCosts=() => {
    const saveCostDataHandler=(inputCostData)=>
    {
        console.log(inputCostData)
        const costData={
            ...inputCostData,
            id:Math.random().toString(),
        }
        console.log(costData)
    }
    return (
        <div className='new-cost'>
        <CostForm onSaveCostData={saveCostDataHandler}></CostForm>
        </div>
    );
}

export default InputCosts