import CostForm from './CostForm';
import './InputCosts.css';


const InputCosts=(props) => {
    const saveCostDataHandler=(inputCostData)=>
    {
        console.log(inputCostData)
        const costData={
            ...inputCostData,
            id:Math.random().toString(),
        }

    }
    return (
        <div className='new-cost'>
        <CostForm onSaveCostData={saveCostDataHandler}></CostForm>
        </div>
    );
}

export default InputCosts