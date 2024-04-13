import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';

function CostItem(props){

    return (
        <li>
        <Card className="cost-item">
                <CostDate date={props.date}></CostDate>
                <div className="cost-item__description">
                    <h2>{props.description}</h2>
                    <div className="cost-item__price">{props.amount}</div>   
                    <button>Изменить описание</button>              
                </div>
            </Card>
        </li>
    );
}

export default CostItem;