import CostForm from './CostForm';
import './InputCosts.css';


const InputCosts=(props) => {
    const saveCostDataHandler=(inputCostData)=>
    {
        
        const costData={
            ...inputCostData,
            id:Math.random().toString(),
        }
        console.log(inputCostData)
        props.onAddCost(costData)

    }
    return (
        <div className='new-cost'>
        <CostForm onSaveCostData={saveCostDataHandler}></CostForm>
        </div>
    );
}

export default InputCosts