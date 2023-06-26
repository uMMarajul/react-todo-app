
import Form from "./Form.component";
import Item from "./Item.componet";
function Card(){
    return(
        <div className="card" style={{width: "30rem"}}>
            <div className="card-header">
                Todo
            </div>
            <ul className="list-group list-group-flush">
                <Item data="first item"/>
                <Item data="1--- item"/>
                <Item data="third item"/>
                <Item data="forth item"/>
                <Item data="fifth item" />
            </ul>
            <div className="card-footer">
                <Form />
            </div>
        </div>
    );
}


export default Card;