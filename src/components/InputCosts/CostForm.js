import "./CostForm.css"
import React, {useState} from 'react';

const CostForm=(props)=>{

    const[name,setName]=useState('');
    const nameChangeHandler=(event)=>{
        setName(event.target.value);
    };  
    const[sum,setSum]=useState('');
    const sumChangeHandler=(event)=>{
        setSum(event.target.value)
    };
    const[date,setDate]=useState('');
    const dateChangeHandler=(event)=>{
        setDate(event.target.value)
    };

    const submitHandler=(event)=>{
        event.preventDefault();
        const costData={
            description:name,
            amount:sum,
            date:new Date(date)
        }
        props.onSaveCostData(costData);
        setName('');
        setSum('');
        setDate('');
    };

    return (
    <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type="text" value={name} onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input type="number" value={sum} min='0.01' step='0.01' onChange={sumChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input type="date" value={date} min='2019-01-01' steps='2022-12-31' onChange={dateChangeHandler}/>
            </div>
            <div className="new-cost__actions">
                <button type="submit">Добавить Расход</button>
                <button type="button" onClick={props.onCancelButton}>Отмена</button>
            </div>
        </div>
    </form>
    );
};

export default CostForm;